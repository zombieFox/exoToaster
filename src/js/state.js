var state = (function() {

  var baseCost = 4

  var baseInterval = 10000

  var mod = {}

  mod.formula = {
    cost: {
      constant: function(unitmultiplier) {
        return unitmultiplier * baseCost
      },
      difference: {
        arithmetic: function(unitmultiplier) {
          return (unitmultiplier * 2) * baseCost
        },
        geometric: function(unitmultiplier) {
          return (unitmultiplier / 10) + 1
        }
      }
    },
    interval: function(unitmultiplier) {
      return (unitmultiplier / 32) * baseInterval
    }
  }

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
      unitmultiplier: 2,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    autotoaster: {
      level: 0,
      toastperunit: 1,
      unitmultiplier: 16,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    autotoasterspeed: {
      level: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      },
      interval: {
        starting: null
      }
    },
    autotoasterefficiency: {
      level: 1,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    megatoaster: {
      level: 0,
      toastperunit: 4,
      unitmultiplier: 32,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    megatoasterspeed: {
      level: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      },
      interval: {
        starting: null
      }
    },
    megatoasterefficiency: {
      level: 1,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    rockettoaster: {
      level: 0,
      toastperunit: 16,
      unitmultiplier: 64,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    rockettoasterspeed: {
      level: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      },
      interval: {
        starting: null
      }
    },
    rockettoasterefficiency: {
      level: 1,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    quantumtoaster: {
      level: 0,
      toastperunit: 64,
      unitmultiplier: 128,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    quantumtoasterspeed: {
      level: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      },
      interval: {
        starting: null
      }
    },
    quantumtoasterefficiency: {
      level: 1,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    readout: {
      interval: 100
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
          h: 219,
          s: 22,
          l: 37
        },
        rgb: {
          r: 74,
          g: 88,
          b: 115
        },
        contrast: {
          light: 6,
          dark: 3
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

  // processor
  current.processor.cost.constant = mod.formula.cost.constant(current.processor.unitmultiplier)
  current.processor.cost.difference = mod.formula.cost.difference.geometric(current.processor.unitmultiplier)

  // autotoaster
  current.autotoaster.cost.constant = mod.formula.cost.constant(current.autotoaster.unitmultiplier)
  current.autotoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.autotoaster.unitmultiplier)

  // autotoasterspeed
  current.autotoasterspeed.cost.constant = mod.formula.cost.constant(current.autotoaster.unitmultiplier)
  current.autotoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.autotoaster.unitmultiplier)
  current.autotoasterspeed.interval.starting = mod.formula.interval(current.autotoaster.unitmultiplier)

  // autotoasterefficiency
  current.autotoasterefficiency.cost.constant = mod.formula.cost.constant(current.autotoaster.unitmultiplier)
  current.autotoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.autotoaster.unitmultiplier)

  // megatoaster
  current.megatoaster.cost.constant = mod.formula.cost.constant(current.megatoaster.unitmultiplier)
  current.megatoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.megatoaster.unitmultiplier)

  // megatoasterspeed
  current.megatoasterspeed.cost.constant = mod.formula.cost.constant(current.megatoaster.unitmultiplier)
  current.megatoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.megatoaster.unitmultiplier)
  current.megatoasterspeed.interval.starting = mod.formula.interval(current.megatoaster.unitmultiplier)

  // megatoasterefficiency
  current.megatoasterefficiency.cost.constant = mod.formula.cost.constant(current.megatoaster.unitmultiplier)
  current.megatoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.megatoaster.unitmultiplier)

  // rockettoaster
  current.rockettoaster.cost.constant = mod.formula.cost.constant(current.rockettoaster.unitmultiplier)
  current.rockettoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.rockettoaster.unitmultiplier)

  // rockettoasterspeed
  current.rockettoasterspeed.cost.constant = mod.formula.cost.constant(current.rockettoaster.unitmultiplier)
  current.rockettoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.rockettoaster.unitmultiplier)
  current.rockettoasterspeed.interval.starting = mod.formula.interval(current.rockettoaster.unitmultiplier)

  // rockettoasterefficiency
  current.rockettoasterefficiency.cost.constant = mod.formula.cost.constant(current.rockettoaster.unitmultiplier)
  current.rockettoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.rockettoaster.unitmultiplier)

  // quantumtoaster
  current.quantumtoaster.cost.constant = mod.formula.cost.constant(current.quantumtoaster.unitmultiplier)
  current.quantumtoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.quantumtoaster.unitmultiplier)

  // quantumtoasterspeed
  current.quantumtoasterspeed.cost.constant = mod.formula.cost.constant(current.quantumtoaster.unitmultiplier)
  current.quantumtoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.quantumtoaster.unitmultiplier)
  current.quantumtoasterspeed.interval.starting = mod.formula.interval(current.quantumtoaster.unitmultiplier)

  // quantumtoasterefficiency
  current.quantumtoasterefficiency.cost.constant = mod.formula.cost.constant(current.quantumtoaster.unitmultiplier)
  current.quantumtoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.quantumtoaster.unitmultiplier)

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
