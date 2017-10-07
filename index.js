'use strict'

const debounce = require('lodash.debounce')

const createModel = require('./lib/create-model')
const findPeers = require('./lib/find-peers')

const createChat = (name, render) => {
	const model = createModel()

	const send = (content) => {
		model.push({from: name, when: Date.now(), content})
	}

	const nrOfPeers = findPeers((peer) => {
		// replicate
		const s = model.createStream()
		s.pipe(peer).pipe(s)

		rerender()
	})

	const _rerender = () => {
		const messages = model.toJSON()
		render(true, messages, null, nrOfPeers())
	}
	const rerender = debounce(_rerender, 100, {maxWait: 100})
	model.on('update', rerender)

	return {send}
}

module.exports = createChat
