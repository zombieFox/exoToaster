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
      toast.make(state.get.current().autotoaster.level * state.get.current().autotoaster.efficiency.level)

      helper.e("html").style.setProperty("--card-autotoaster-meter-duration", (10000 - (state.get.current().autotoaster.speed.level * 100)) + "ms");

      helper.e(".card-autotoaster").classList.remove("active");
      void helper.e(".card-autotoaster .card-meter-progress").offsetWidth;
      helper.e(".card-autotoaster").classList.add("active");
    },
    interval: function() {
      return 10000 - (state.get.current().autotoaster.speed.level * 100)
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
      toast.make(state.get.current().megatoaster.level * state.get.current().megatoaster.efficiency.level * 10)

      helper.e("html").style.setProperty("--card-megatoaster-meter-duration", (10000 - (state.get.current().megatoaster.speed.level * 100)) + "ms");

      helper.e(".card-megatoaster").classList.remove("active");
      void helper.e(".card-megatoaster .card-meter-progress").offsetWidth;
      helper.e(".card-megatoaster").classList.add("active");
    },
    interval: function() {
      return 10000 - (state.get.current().megatoaster.speed.level * 100)
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
