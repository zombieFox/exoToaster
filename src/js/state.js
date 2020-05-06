var state = (function() {

  var current = {
    store: {
      interval: 400000
    },
    toast: {
      lifetime: {
        current: 0
      },
      inventory: {
        current: 0
      }
    },
    processor: {
      level: 1,
      cost: {
        constant: 20,
        difference: 1.2
      }
    },
    autotoaster: {
      level: 0,
      cost: {
        constant: 8,
        difference: 8
      }
    },
    theme: {
      accent: {
        hsl: {
          h: 221,
          s: 100,
          l: 50
        },
        rgb: {
          r: 0,
          g: 80,
          b: 255
        },
        random: {
          active: false,
          style: "any"
        },
        cycle: {
          active: false,
          speed: 300,
          step: 10
        }
      },
      color: {
        hsl: {
          h: 222,
          s: 14,
          l: 56
        },
        rgb: {
          r: 129,
          g: 138,
          b: 160
        },
        contrast: {
          light: 4,
          dark: 4
        },
        generated: {}
      },
      font: {
        display: {
          name: "",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "",
          weight: 400,
          style: "normal"
        }
      },
      style: "dark",
      radius: 0.25,
      shadow: 0.75,
      shade: {
        opacity: 0.4
      }
    }
  }

  var mod = {}

  mod.get = {
    current: function() {
      return current
    }
  }

  mod.set = function(override) {
    var options = {
      path: null,
      value: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    helper.setObject({
      object: mod.get.current(),
      path: options.path,
      newValue: options.value
    })
  }

  mod.restore = function(data) {
    if ("state" in data) {
      current = data.state
    }
  }

  var get = {
    current: function() {
      return mod.get.current()
    }
  }

  var set = function(override) {
    mod.set(override)
  }

  return {
    mod: mod,
    get: get,
    set: set
  }

})()
