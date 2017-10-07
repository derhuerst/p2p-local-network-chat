'use strict'

const airswarm = require('airswarm')
const sha1 = require('sha1-hex')

const pkg = require('../package.json')

const room = pkg.name + '_' + pkg.version

const findPeers = (cb) => {
	const onPeer = (peer) => {
		peer.id = sha1(peer.remoteAddress + ':' + peer.remotePort)
		cb(peer)
	}

	airswarm(room, (peer) => {
		if (peer.connecting) peer.once('connect', () => onPeer(peer))
		else onPeer(peer)
	})
}

module.exports = findPeers
