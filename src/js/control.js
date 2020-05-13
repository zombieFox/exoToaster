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

  mod.all = {
    toast: [{
      element: "[control=toast]",
      type: "button",
      func: function() {
        toast.make(state.get.current().processor.level)
      }
    }, {
      element: "[control=toaster-motivate]",
      type: "button",
      func: function() {
        motivation.render()
      }
    }],
    processor: [{
      element: "[control=processor-level-increase1]",
      type: "button",
      func: function() {
        processor.upgrade(1)
        cycle.mod.max()
        cycle.mod.interval.set()
      }
    }, {
      element: "[control=processor-level-increase10]",
      type: "button",
      func: function() {
        processor.upgrade(10)
        cycle.mod.max()
        cycle.mod.interval.set()
      }
    }, {
      element: "[control=processor-level-increase100]",
      type: "button",
      func: function() {
        processor.upgrade(100)
        cycle.mod.max()
        cycle.mod.interval.set()
      }
    }],
    autotoaster: [{
      element: "[control=autotoaster-level-increase1]",
      type: "button",
      func: function() {
        autotoaster.upgrade(1)
      }
    }, {
      element: "[control=autotoaster-level-increase10]",
      type: "button",
      func: function() {
        autotoaster.upgrade(10)
      }
    }, {
      element: "[control=autotoaster-level-increase100]",
      type: "button",
      func: function() {
        autotoaster.upgrade(100)
      }
    }, {
      element: "[control=autotoasterspeed-level-increase1]",
      type: "button",
      func: function() {
        autotoasterspeed.upgrade(1)
        autotoasterspeed.setInterval()
        render.disable.check(this)
      },
      disable: {
        condition: function() {
          return state.get.current().autotoasterspeed.interval.current <= state.get.current().autotoasterspeed.interval.min
        }
      }
    }],
    megatoaster: [{
      element: "[control=megatoaster-level-increase1]",
      type: "button",
      func: function() {
        megatoaster.upgrade(1)
      }
    }, {
      element: "[control=megatoaster-level-increase10]",
      type: "button",
      func: function() {
        megatoaster.upgrade(10)
      }
    }, {
      element: "[control=megatoaster-level-increase100]",
      type: "button",
      func: function() {
        megatoaster.upgrade(100)
      }
    }, {
      element: "[control=megatoasterspeed-level-increase1]",
      type: "button",
      func: function() {
        megatoasterspeed.upgrade(1)
        megatoasterspeed.setInterval()
        render.disable.check(this)
      },
      disable: {
        condition: function() {
          return state.get.current().megatoasterspeed.interval.current <= state.get.current().megatoasterspeed.interval.min
        }
      }
    }],
    rockettoaster: [{
      element: "[control=rockettoaster-level-increase1]",
      type: "button",
      func: function() {
        rockettoaster.upgrade(1)
      }
    }, {
      element: "[control=rockettoaster-level-increase10]",
      type: "button",
      func: function() {
        rockettoaster.upgrade(10)
      }
    }, {
      element: "[control=rockettoaster-level-increase100]",
      type: "button",
      func: function() {
        rockettoaster.upgrade(100)
      }
    }, {
      element: "[control=rockettoasterspeed-level-increase1]",
      type: "button",
      func: function() {
        rockettoasterspeed.upgrade(1)
        rockettoasterspeed.setInterval()
        render.disable.check(this)
      },
      disable: {
        condition: function() {
          return state.get.current().rockettoasterspeed.interval.current <= state.get.current().rockettoasterspeed.interval.min
        }
      }
    }],
    atomictoaster: [{
      element: "[control=atomictoaster-level-increase1]",
      type: "button",
      func: function() {
        atomictoaster.upgrade(1)
      }
    }, {
      element: "[control=atomictoaster-level-increase10]",
      type: "button",
      func: function() {
        atomictoaster.upgrade(10)
      }
    }, {
      element: "[control=atomictoaster-level-increase100]",
      type: "button",
      func: function() {
        atomictoaster.upgrade(100)
      }
    }, {
      element: "[control=atomictoasterspeed-level-increase1]",
      type: "button",
      func: function() {
        atomictoasterspeed.upgrade(1)
        atomictoasterspeed.setInterval()
        render.disable.check(this)
      },
      disable: {
        condition: function() {
          return state.get.current().atomictoasterspeed.interval.current <= state.get.current().atomictoasterspeed.interval.min
        }
      }
    }],
    quantumtoaster: [{
      element: "[control=quantumtoaster-level-increase1]",
      type: "button",
      func: function() {
        quantumtoaster.upgrade(1)
      }
    }, {
      element: "[control=quantumtoaster-level-increase10]",
      type: "button",
      func: function() {
        quantumtoaster.upgrade(10)
      }
    }, {
      element: "[control=quantumtoaster-level-increase100]",
      type: "button",
      func: function() {
        quantumtoaster.upgrade(100)
      }
    }, {
      element: "[control=quantumtoasterspeed-level-increase1]",
      type: "button",
      func: function() {
        quantumtoasterspeed.upgrade(1)
        quantumtoasterspeed.setInterval()
        render.disable.check(this)
      },
      disable: {
        condition: function() {
          return state.get.current().quantumtoasterspeed.interval.current <= state.get.current().quantumtoasterspeed.interval.min
        }
      }
    }]
  }

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
          readout.render.all()
        }
      }, false)
    }
  }

  bind.control.all = function() {
    for (var key in mod.all) {
      mod.all[key].forEach(function(item, index) {
        if (helper.e(item.element)) {
          bind.control.action(item)
        }
      })
    }
  }

  var render = {}

  render.disable = {
    check: function(controlObject) {
      if (controlObject.disable.condition()) {
        helper.e(controlObject.element).disabled = true
      }
    }
  }

  var debug = function() {
    mod.debug.toggle()
  }

  var init = function() {
    bind.control.all()
  }

  return {
    debug: debug,
    mod: mod,
    init: init
  }

})()
