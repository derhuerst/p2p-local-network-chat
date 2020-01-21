# p2p-local-network-chat

**A minimal [peer-to-peer](https://en.wikipedia.org/wiki/Distributed_computing#Architectures) chat for the local network** with [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS) discovery. Like [local-network-chat](https://github.com/derhuerst/local-network-chat#local-network-chat), with the following differences:

- [local-network-chat](https://github.com/derhuerst/local-network-chat#local-network-chat) works using [broadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)). This one sends messages peer-to-peer.
- `p2p-local-network-chat` syncs messages from the past.

[![npm version](https://img.shields.io/npm/v/p2p-local-network-chat.svg)](https://www.npmjs.com/package/p2p-local-network-chat)
[![build status](https://img.shields.io/travis/derhuerst/p2p-local-network-chat.svg)](https://travis-ci.org/derhuerst/p2p-local-network-chat)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/p2p-local-network-chat.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install -g p2p-local-network-chat
```


## Usage

```
Usage:
    p2p-local-network-chat [name]
Examples:
    p2p-local-network-chat derhuerst
```

## Related

- [hyperswarm-universal-chat](https://github.com/RangerMauve/hyperswarm-universal-chat) – A basic demo showing how you can make a gossip based p2p chat using hyperswarm.


## Contributing

If you have a question or have difficulties using `p2p-local-network-chat`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/p2p-local-network-chat/issues).
