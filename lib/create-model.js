'use strict'

// const ram = require('random-access-memory')
// const hypercore = require('hypercore')

// const levelup = require('levelup')
// const memdown = require('memdown')
// const ssbCodec = require('secure-scuttlebutt/codec')
// const scuttlebutt = require('secure-scuttlebutt')

const ReplicatedArray = require('r-array')

const createModel = () => {
	// const db = levelup('my-db', {
	// 	db: memdown,
	// 	valueEncoding: ssbCodec
	// })

	// const ssb = scuttlebutt(db)

	const feed = new ReplicatedArray()

	return feed
}

module.exports = createModel
