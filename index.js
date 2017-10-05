'use strict'

const createServer = require('./lib/create-server')
const announceSelf = require('./lib/announce-self')
const findPeers = require('./lib/find-peers')
const id = require('./lib/id')

const showError = (err) => {
	console.error(err)
	process.exit(1)
}

createServer((err, server, address, port) => {
	if (err) return showError(err)
	console.error(id, address, port)

	announceSelf(id, address, port, (err) => {
		if (err) return showError(err)
		console.error('announced')

		const peers = findPeers()
		peers.on('peer', (peer, connection) => {
			const s = createReplicationStream()
			s.pipe(connection).pipe(s)
		})
	})
})
