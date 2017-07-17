# titly

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/titly.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/titly.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/titly/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/titly)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/titly.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/titly)
[![Dependency status](https://img.shields.io/david/Kikobeats/titly.svg?style=flat-square)](https://david-dm.org/Kikobeats/titly)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/titly.svg?style=flat-square)](https://david-dm.org/Kikobeats/titly#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/titly.svg?style=flat-square)](https://www.npmjs.org/package/titly)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Create a title from an input text.

## Install

```bash
$ npm install titly --save
```

## Usage

```js
const titly = require('titly')

titly('do something', {
  separator: ' ',
  length: 8
})
```

## API

### titly(str, [options])

#### input

*Required*<br>
Type: `string`

The input text to extract the title.

#### options

##### separator

Type: `string`<br>
Default: ` `

Split the input text based in the separator.

##### length

Type: `number`<br>
Default: `8`

Count number of elements based on the separator for truncate the title.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
