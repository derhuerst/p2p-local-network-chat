'use strict'

const createModel = require('./lib/create-model')
const findPeers = require('./lib/find-peers')
const id = require('./lib/id')

const showError = (err) => {
	console.error(err)
	process.exit(1)
}

const model = createModel()

const replicate = (connection) => {
	const s = model.createStream()
	s.pipe(connection).pipe(s)
}

findPeers((peer) => {
	console.error('peer', peer.id)
	replicate(peer)
})
