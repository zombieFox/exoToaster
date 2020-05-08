var state = (function() {

  var current = {
    save: {
      interval: 200000
    },
    events: {
      all: []
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
    cycles: {
      current: 1
    },
    autotoaster: {
      level: 0,
      cost: {
        constant: 8,
        difference: 4
      },
      speed: {
        level: 0,
        cost: {
          constant: 40,
          difference: 1.1
        }
      },
      efficiency: {
        level: 0,
        cost: {
          constant: 80,
          difference: 1.2
        }
      }
    },
    megatoaster: {
      level: 0,
      cost: {
        constant: 32,
        difference: 16
      },
      speed: {
        level: 0,
        cost: {
          constant: 160,
          difference: 1.1
        }
      },
      efficiency: {
        level: 0,
        cost: {
          constant: 320,
          difference: 1.2
        }
      }
    },
    readout: {
      interval: 10
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
    },
    report: {
      message: {
        max: 100
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
