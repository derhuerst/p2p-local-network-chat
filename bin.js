#!/usr/bin/env node
'use strict'

const mri = require('mri')
const cryptoRandomString = require('crypto-random-string')
const createUI = require('really-basic-chat-ui')

const createChat = require('.')
const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: ['help', 'h', 'version', 'v']
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    p2p-local-network-chat [name]
Examples:
    p2p-local-network-chat derhuerst
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`p2p-local-network-chat v${pkg.version}\n`)
	process.exit(0)
}

const name = argv._[0] || cryptoRandomString(10)

const render = createUI(msg => chat.send(msg))
const chat = createChat(name, render)
