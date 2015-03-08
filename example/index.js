const deku = require('deku')
const event = require('..')

const component = deku.component
const dom = deku.dom

var button = component()
button.use(event.plugin())

button.prototype.render = function render (props, state) {
  return dom('button', { onClick: this.onClick }, [props.text])
}

button.on('initialState', function (props, state) {
  console.log(props, state)
})

const targetNode = document.querySelector('.targetMe')
button.render(targetNode, {foo: 'bar'})
