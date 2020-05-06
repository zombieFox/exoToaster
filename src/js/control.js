var control = (function() {

  var mod = {}

  mod.debug = {
    active: false,
    toggle: function() {
      if (mod.debug.active) {
        mod.debug.active = false
      } else {
        mod.debug.active = true
      }
    }
  }

  mod.header = []

  mod.toast = [{
    element: "[control=toast]",
    type: "button",
    func: function() {
      toast.make(state.get.current().processor.level)
      readout.render.all()
    }
  }, {
    element: "[control=processor-add-1]",
    type: "button",
    func: function() {
      processor.increase(1)
      readout.render.all()
    }
  }, {
    element: "[control=processor-add-10]",
    type: "button",
    func: function() {
      processor.increase(10)
      readout.render.all()
    }
  }, {
    element: "[control=processor-add-100]",
    type: "button",
    func: function() {
      processor.increase(100)
      readout.render.all()
    }
  }, {
    element: "[control=autotoaster-add-1]",
    type: "button",
    func: function() {
      autotoaster.increase(1)
      readout.render.all()
    }
  }, {
    element: "[control=autotoaster-add-10]",
    type: "button",
    func: function() {
      autotoaster.increase(10)
      readout.render.all()
    }
  }, {
    element: "[control=autotoaster-add-100]",
    type: "button",
    func: function() {
      autotoaster.increase(100)
      readout.render.all()
    }
  }]

  mod.processor = []

  var bind = {}

  bind.control = {}

  bind.control.eventType = {
    a: "click",
    button: "click",
    checkbox: "change",
    radio: "change",
    text: "input",
    textarea: "input",
    number: "input",
    range: "input",
    color: "change",
    file: "change"
  }

  bind.control.action = function(object) {
    if (object.element) {
      helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
        if (mod.debug.active) {
          console.log(object)
        }
        if (object.func) {
          object.func()
        }
      }, false)
    }
  }

  bind.control.toast = function() {
    mod.toast.forEach(function(arrayItem, index) {
      if (helper.e(arrayItem.element)) {
        bind.control.action(arrayItem)
      }
    })
  }

  var debug = function() {
    mod.debug.toggle()
  }

  var init = function() {
    bind.control.toast()
  }

  return {
    mod: mod,
    init: init,
    debug: debug
  }

})()
