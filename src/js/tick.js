var tick = (function() {

  var current = {}

  var set = function(override) {
    var options = {
      name: null,
      func: null,
      interval: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    if (options.interval == null) {
      options.interval = state.get.current().save.interval
    }

    current[options.name] = setTimeout(function() {
      options.func()
      set(options)
    }, options.interval)
  }

  var get = function() {
    return current
  }

  var init = function() {}

  return {
    set: set,
    get: get,
    init: init
  }

})()
