var tick = (function() {

  var current = {}

  var mod = {}

  mod.set = function(override) {
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
      mod.set(options)
    }, calculatedInterval)
  }

  mod.get = function() {
    return current
  }

  mod.remove = function(name) {
    clearInterval(tick.get()[name])
  }

  return {
    mod: mod,
    current: current
  }

})()
