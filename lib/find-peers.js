'use strict'

const sha1 = require('sha1-hex')
const net = require('net')

const pkg = require('../package.json')
const bonjour = require('./bonjour')
const id = require('./id')

const subtype = sha1(pkg.version).slice(0, 10)

const findPeers = () => {
	const browser = bonjour.find({
		type: pkg.name,
		subtypes: [subtype],
		protocol: 'tcp'
	})
	browser.start()

	browser.on('up', (peer) => {
		if (peer.name === id) return // ignore self

		const connection = net.connect(peer.port, peer.host, () => {
			browser.emit('peer', peer, connection)
		})
		// todo: retry on close, timeout, error
	})

	return browser
}

module.exports = findPeers
