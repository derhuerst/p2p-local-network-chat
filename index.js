'use strict'

const createUI = require('really-basic-chat-ui')

const createModel = require('./lib/create-model')
const findPeers = require('./lib/find-peers')
const id = require('./lib/id')

const showError = (err) => {
	console.error(err)
	process.exit(1)
}

const model = createModel()

const send = (content) => {
	model.push({from: id, when: Date.now(), content})
}

const nrOfPeers = findPeers((peer) => {
	// replicate
	const s = model.createStream()
	s.pipe(peer).pipe(s)

	// greet
	model.push({from: id, when: Date.now(), content: `Hey ${peer.id}!`})
})

const render = createUI(send)
const rerender = () => {
	const messages = model.toJSON()
	render(true, messages, null, nrOfPeers())
}
model.on('update', rerender)
