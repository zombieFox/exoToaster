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
      }
    }, {
      element: "[control=processor-level-increase10]",
      type: "button",
      func: function() {
        processor.upgrade(10)
      }
    }, {
      element: "[control=processor-level-increase100]",
      type: "button",
      func: function() {
        processor.upgrade(100)
      }
    }],
    autotoaster: [{
      element: "[control=autotoaster-level-increase1]",
      type: "button",
      func: function() {
        autotoaster.upgrade(1)
        tick.check()
      }
    }, {
      element: "[control=autotoaster-level-increase10]",
      type: "button",
      func: function() {
        autotoaster.upgrade(10)
        tick.check()
      }
    }, {
      element: "[control=autotoaster-level-increase100]",
      type: "button",
      func: function() {
        autotoaster.upgrade(100)
        tick.check()
      }
    }, {
      element: "[control=autotoaster-speed-level-increase1]",
      type: "button",
      func: function() {
        autotoaster_speed.upgrade(1)
      }
    }, {
      element: "[control=autotoaster-efficiency-level-increase1]",
      type: "button",
      func: function() {
        autotoaster_efficiency.upgrade(1)
      }
    }, {
      element: "[control=autotoaster-efficiency-level-increase10]",
      type: "button",
      func: function() {
        autotoaster_efficiency.upgrade(10)
      }
    }, {
      element: "[control=autotoaster-efficiency-level-increase100]",
      type: "button",
      func: function() {
        autotoaster_efficiency.upgrade(100)
      }
    }],
    megatoaster: [{
      element: "[control=megatoaster-level-increase1]",
      type: "button",
      func: function() {
        megatoaster.upgrade(1)
        tick.check()
      }
    }, {
      element: "[control=megatoaster-level-increase10]",
      type: "button",
      func: function() {
        megatoaster.upgrade(10)
        tick.check()
      }
    }, {
      element: "[control=megatoaster-level-increase100]",
      type: "button",
      func: function() {
        megatoaster.upgrade(100)
        tick.check()
      }
    }, {
      element: "[control=megatoaster-speed-level-increase1]",
      type: "button",
      func: function() {
        megatoaster_speed.upgrade(1)
      }
    }, {
      element: "[control=megatoaster-efficiency-level-increase1]",
      type: "button",
      func: function() {
        megatoaster_efficiency.upgrade(1)
      }
    }, {
      element: "[control=megatoaster-efficiency-level-increase10]",
      type: "button",
      func: function() {
        megatoaster_efficiency.upgrade(10)
      }
    }, {
      element: "[control=megatoaster-efficiency-level-increase100]",
      type: "button",
      func: function() {
        megatoaster_efficiency.upgrade(100)
      }
    }],
    rockettoaster: [{
      element: "[control=rockettoaster-level-increase1]",
      type: "button",
      func: function() {
        rockettoaster.upgrade(1)
        tick.check()
      }
    }, {
      element: "[control=rockettoaster-level-increase10]",
      type: "button",
      func: function() {
        rockettoaster.upgrade(10)
        tick.check()
      }
    }, {
      element: "[control=rockettoaster-level-increase100]",
      type: "button",
      func: function() {
        rockettoaster.upgrade(100)
        tick.check()
      }
    }, {
      element: "[control=rockettoaster-speed-level-increase1]",
      type: "button",
      func: function() {
        rockettoaster_speed.upgrade(1)
      }
    }, {
      element: "[control=rockettoaster-efficiency-level-increase1]",
      type: "button",
      func: function() {
        rockettoaster_efficiency.upgrade(1)
      }
    }, {
      element: "[control=rockettoaster-efficiency-level-increase10]",
      type: "button",
      func: function() {
        rockettoaster_efficiency.upgrade(10)
      }
    }, {
      element: "[control=rockettoaster-efficiency-level-increase100]",
      type: "button",
      func: function() {
        rockettoaster_efficiency.upgrade(100)
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
