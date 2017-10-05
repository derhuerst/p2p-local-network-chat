'use strict'

const bonjour = require('./bonjour')
const pkg = require('../package.json')

const announceSelf = (id, address, port, cb) => {
	const announcement = bonjour.publish({
		name: id,
		host: address,
		port,
		type: pkg.name,
		subtypes: [pkg.version],
		protocol: 'tcp'
	})

	const onUp = () => {
		announcement.removeListener('up', onUp)
		announcement.removeListener('error', onError)
		cb(null)
	}
	const onError = (err) => {
		announcement.removeListener('up', onUp)
		announcement.removeListener('error', onError)
		cb(err)
	}

	announcement.on('up', onUp)
	announcement.on('error', onError)
}

module.exports = announceSelf
