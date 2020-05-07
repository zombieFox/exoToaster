var tick = (function() {

  var current = {}

  var mod = {}

  mod.activities = [{
    name: "autotoaster",
    condition: function() {
      return state.get.current().autotoaster.level > 0
    },
    func: function() {
      toast.make(state.get.current().autotoaster.level)
    },
    interval: "autotoaster.interval"
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

    if (options.interval == null) {
      options.interval = state.get.current().save.interval
    }

    current[options.name] = setTimeout(function() {
      options.func()
      set(options)
    }, helper.getObject({
      object: state.get.current(),
      path: options.interval
    }))
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

  var init = function() {}

  return {
    current: current,
    mod: mod,
    set: set,
    get: get,
    check: check,
    init: init
  }

})()
