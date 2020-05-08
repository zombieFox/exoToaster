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
    func: function() {
      toast.make(state.get.current().autotoaster.level)
    },
    interval: function() {
      return 10000 - (state.get.current().autotoaster.speed.level * 100)
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

  var check = function() {
    mod.activities.forEach(function(item, index) {

      if (item.condition() && !(item.name in current)) {
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
    check: check,
    init: init
  }

})()
