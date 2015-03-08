const emitter = require('events').EventEmitter
const assert = require('assert')

module.exports = dekuEvent
dekuEvent.plugin = eventer

// wrap `deku.component` to use
// an event-based api instead
// @param {Object} component
// @return {Function}
function dekuEvent (component) {
  return function () {
    return component(arguments)
      .plugin(eventer())
  }
}

// update the component prototypes
// @return {Function}
function eventer () {
  // the function used by deku's `plugin`
  // @param {Object} component
  return function eventer (component) {
    assert.ok(component)

    Object.setPrototypeOf(component.prototype, emitter.prototype)

    setValue(component, 'initialState')
    setValue(component, 'propsChanged')
    setValue(component, 'beforeMount')
    setValue(component, 'afterMount')
    setValue(component, 'beforeUpdate')
    setValue(component, 'afterUpdate')
    setValue(component, 'beforeUnmount')
    setValue(component, 'afterUnmount')
  }
}

// update a function prototype
// @param {Object} component
// @param {String} name
function setValue (component, name) {
  component.prototype[name] = function () {
    component.emit(name, arguments)
  }
}
