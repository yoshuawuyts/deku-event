const test = require('tape')
const deku = require('deku')
const event = require('./')

const component = deku.component
const dom = deku.dom

test('should create a component', function (t) {
  t.plan(1)

  var button = component()
  button.use(event.plugin())

  button.on('render', function (props, state) {
    console.log('foobar')
    return dom('button', ['hello world'])
  })

  button.render(document.body)
})

test('shutdown', function (t) {
  window.close()
  t.end()
})
