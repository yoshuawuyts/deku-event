const deku = require('deku')
const event = require('..')

const component = deku.component
const dom = deku.dom

var button = component()
button.use(event.plugin())

button.on('render', function (props, state) {
  console.log(props, state)
  return dom('button')
})

button.render(document.body, {foo: 'bar'})

console.log(button.render)
