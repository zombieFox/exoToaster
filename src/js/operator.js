var operator = (function() {

  var mod = function(override) {
    var options = {
      type: null,
      value: null,
      by: null,
      percentage: null,
      integer: null,
      min: null,
      max: null
    }
    if (override) {
      options = helper.applyOptions(options, override)
    }
    var action = {
      increase: function() {
        options.value = options.value + options.by
      },
      decrease: function() {
        options.value = options.value - options.by
      },
      divide: function() {
        options.value = options.value / options.by
      },
      multiply: function() {
        options.value = options.value * options.by
      },
      percentage: function() {
        options.value = (options.percentage / 100) * options.value
      },
      min: function() {
        options.value = options.min
      },
      max: function() {
        options.value = options.max
      },
      integer: function() {
        options.value = Math.round(options.value)
      }
    }
    action[options.type]()
    if (options.value < 0) {
      options.value = 0
    }
    if (options.min != null && options.value < options.min) {
      action.min()
    }
    if (options.max != null && options.value > options.max) {
      action.max()
    }
    if (options.integer != null && options.integer) {
      action.integer()
    }
    return options.value
  }

  return {
    mod: mod
  }

})()
