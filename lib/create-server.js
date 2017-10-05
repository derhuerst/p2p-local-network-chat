'use strict'

const getAddress = require('network-address')
const getPort = require('get-port')
const net = require('net')

const address = getAddress()

const createServer = (cb) => {
	getPort()
	.then((port) => {
		const server = new net.Server()
		server.listen({port, host: address}, (err) => {
			if (err) return cb(err)
			cb(null, server, address, port)
		})
	})
	.catch(cb)
}

module.exports = createServer
