var tick = (function() {

  var current = {}

  var set = function(override) {
    var options = {
      name: null,
      func: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    current[options.name] = window.setTimeout(function() {
      options.func()
      set(options)
    }, state.get.current().store.interval)
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
