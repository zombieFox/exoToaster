var tick = (function() {

  var current = {}

  var mod = {}

  mod.activities = [{
    name: "readout",
    condition: function() {
      return true
    },
    func: function() {
      readout.render.all()
    },
    interval: function() {
      return state.get.current().readout.interval
    }
  }, {
    name: "events",
    condition: function() {
      return true
    },
    func: function() {
      events.mod.check()
    },
    interval: function() {
      return state.get.current().events.interval
    }
  }, {
    name: "cycle",
    condition: function() {
      return state.get.current().processor.level > 0
    },
    func: function() {
      cycle.mod.add(1)
      cycle.mod.interval.animation()
    },
    interval: function() {
      return state.get.current().cycle.interval.current
    }
  }, {
    name: "autotoaster",
    condition: function() {
      return state.get.current().autotoaster.level > 0
    },
    setup: function() {
      helper.e(".card-autotoaster").classList.add("active")
    },
    func: function() {
      toast.make(state.get.current().autotoaster.level * state.get.current().autotoaster.toastperunit)
      autotoasterspeed.cardAnimationInterval()
    },
    interval: function() {
      return state.get.current().autotoasterspeed.interval.current
    }
  }, {
    name: "megatoaster",
    condition: function() {
      return state.get.current().megatoaster.level > 0
    },
    setup: function() {
      helper.e(".card-megatoaster").classList.add("active")
    },
    func: function() {
      toast.make(state.get.current().megatoaster.level * state.get.current().megatoaster.toastperunit)
      megatoasterspeed.cardAnimationInterval()
    },
    interval: function() {
      return state.get.current().megatoasterspeed.interval.current
    }
  }, {
    name: "rockettoaster",
    condition: function() {
      return state.get.current().rockettoaster.level > 0
    },
    setup: function() {
      helper.e(".card-rockettoaster").classList.add("active")
    },
    func: function() {
      toast.make(state.get.current().rockettoaster.level * state.get.current().rockettoaster.toastperunit)
      rockettoasterspeed.cardAnimationInterval()
    },
    interval: function() {
      return state.get.current().rockettoasterspeed.interval.current
    }
  }, {
    name: "atomictoaster",
    condition: function() {
      return state.get.current().atomictoaster.level > 0
    },
    setup: function() {
      helper.e(".card-atomictoaster").classList.add("active")
    },
    func: function() {
      toast.make(state.get.current().atomictoaster.level * state.get.current().atomictoaster.toastperunit)
      atomictoasterspeed.cardAnimationInterval()
    },
    interval: function() {
      return state.get.current().atomictoasterspeed.interval.current
    }
  }, {
    name: "quantumtoaster",
    condition: function() {
      return state.get.current().quantumtoaster.level > 0
    },
    setup: function() {
      helper.e(".card-quantumtoaster").classList.add("active")
    },
    func: function() {
      toast.make(state.get.current().quantumtoaster.level * state.get.current().quantumtoaster.toastperunit)
      quantumtoasterspeed.cardAnimationInterval()
    },
    interval: function() {
      return state.get.current().quantumtoasterspeed.interval.current
    }
  }]

  var set = function(override) {
    var options = {
      name: null,
      func: null,
      interval: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var calculatedInterval

    if (typeof options.interval === "function") {
      calculatedInterval = options.interval()
    } else if (typeof options.interval === "number") {
      calculatedInterval = options.interval
    } else {
      calculatedInterval = state.get.current().save.interval
    }

    current[options.name] = setTimeout(function() {
      options.func()
      set(options)
    }, calculatedInterval)
  }

  var get = function() {
    return current
  }

  var remove = function(name) {
    clearInterval(tick.get()[name])
  }

  var check = function() {
    mod.activities.forEach(function(item, index) {

      if (item.condition() && !(item.name in current)) {
        if (item.setup) {
          item.setup()
        }
        set({
          name: item.name,
          func: item.func,
          interval: item.interval
        })
      }

    })
  }

  var init = function() {
    check()
  }

  return {
    mod: mod,
    set: set,
    get: get,
    remove: remove,
    check: check,
    init: init
  }

})()
