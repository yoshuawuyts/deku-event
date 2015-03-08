# deku-event
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Turn deku components into event emitters.

## Installation
```bash
$ npm install deku-event
```

## Usage
```js
const event = require('deku-event')
const deku = require('deku')

const component = deku.component
const dom = deku.dom

var button = component()
button.use(event.plugin())

button.on('render', function (props, state) {
  return dom('button')
})

button.render(document.body, {foo: 'bar'})
```

## API
#### event(deku.component)
Wrap `deku.component` so all created components use
`deku-event` by default
```js
const event = require('deku-event')
const deku = require('deku')

const component = event(deku.component)
```

#### component().use(event.plugin())
Attach a plugin to the component.
```js
const event = require('deku-event')
const deku = require('deku')

const component = event(deku.component)
const dom = deku.dom

var button = component()
button.use(event.plugin())
```
## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/deku-event.svg?style=flat-square
[npm-url]: https://npmjs.org/package/deku-event
[travis-image]: https://img.shields.io/travis/yoshuawuyts/deku-event.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/deku-event
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/deku-event.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/deku-event?branch=master
[downloads-image]: http://img.shields.io/npm/dm/deku-event.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/deku-event
