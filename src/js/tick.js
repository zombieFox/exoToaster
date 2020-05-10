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
    name: "autotoaster",
    condition: function() {
      return state.get.current().autotoaster.level > 0
    },
    setup: function() {
      helper.e(".card-autotoaster").classList.add("active")
    },
    func: function() {
      var level = state.get.current().autotoaster.level
      var efficiency = state.get.current().autotoasterefficiency.level
      var toastperunit = state.get.current().autotoaster.toastperunit
      toast.make(level * efficiency * toastperunit)

      helper.e("html").style.setProperty("--card-autotoasterspeed-meter-duration", (state.get.current().autotoasterspeed.interval.starting - (state.get.current().autotoasterspeed.level * 100)) + "ms")

      helper.e(".card-autotoaster").classList.remove("active")
      void helper.e(".card-autotoaster .card-meter-progress").offsetWidth
      helper.e(".card-autotoaster").classList.add("active")
    },
    interval: function() {
      return state.get.current().autotoasterspeed.interval.starting - (state.get.current().autotoasterspeed.level * 100)
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
      var level = state.get.current().megatoaster.level
      var efficiency = state.get.current().megatoasterefficiency.level
      var toastperunit = state.get.current().megatoaster.toastperunit
      toast.make(level * efficiency * toastperunit)

      helper.e("html").style.setProperty("--card-megatoasterspeed-meter-duration", (state.get.current().megatoasterspeed.interval.starting - (state.get.current().megatoasterspeed.level * 100)) + "ms")

      helper.e(".card-megatoaster").classList.remove("active")
      void helper.e(".card-megatoaster .card-meter-progress").offsetWidth
      helper.e(".card-megatoaster").classList.add("active")
    },
    interval: function() {
      return state.get.current().megatoasterspeed.interval.starting - (state.get.current().megatoasterspeed.level * 100)
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
      var level = state.get.current().rockettoaster.level
      var efficiency = state.get.current().rockettoasterefficiency.level
      var toastperunit = state.get.current().rockettoaster.toastperunit
      toast.make(level * efficiency * toastperunit)

      helper.e("html").style.setProperty("--card-rockettoasterspeed-meter-duration", (state.get.current().rockettoasterspeed.interval.starting - (state.get.current().rockettoasterspeed.level * 100)) + "ms")

      helper.e(".card-rockettoaster").classList.remove("active")
      void helper.e(".card-rockettoaster .card-meter-progress").offsetWidth
      helper.e(".card-rockettoaster").classList.add("active")
    },
    interval: function() {
      return state.get.current().rockettoasterspeed.interval.starting - (state.get.current().rockettoasterspeed.level * 100)
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
      var level = state.get.current().quantumtoaster.level
      var efficiency = state.get.current().quantumtoasterefficiency.level
      var toastperunit = state.get.current().quantumtoaster.toastperunit
      toast.make(level * efficiency * toastperunit)

      helper.e("html").style.setProperty("--card-quantumtoasterspeed-meter-duration", (state.get.current().quantumtoasterspeed.interval.starting - (state.get.current().quantumtoasterspeed.level * 100)) + "ms")

      helper.e(".card-quantumtoaster").classList.remove("active")
      void helper.e(".card-quantumtoaster .card-meter-progress").offsetWidth
      helper.e(".card-quantumtoaster").classList.add("active")
    },
    interval: function() {
      return state.get.current().quantumtoasterspeed.interval.starting - (state.get.current().quantumtoasterspeed.level * 100)
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
