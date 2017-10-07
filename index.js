'use strict'

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
	})

	const rerender = () => {
		const messages = model.toJSON()
		render(true, messages, null, nrOfPeers())
	}
	model.on('update', rerender)

	return {send}
}

module.exports = createChat
