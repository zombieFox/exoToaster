var state = (function() {

  var baseCost = 4

  var baseToastPerUnit = 1

  var baseInterval = 1000

  var mod = {}

  mod.formula = {
    toast: {
      perUnit: function(number) {
        return baseToastPerUnit * number * number
      }
    },
    cost: {
      multiplier: function(number) {
        return baseToastPerUnit * number * number
      },
      constant: function(multiplier) {
        return multiplier * baseCost
      },
      difference: {
        arithmetic: function(multiplier) {
          return (multiplier * 2) * baseCost
        },
        geometric: function(multiplier) {
          return (multiplier / 10) + 1
        }
      }
    },
    interval: function(number) {
      return (number * 6) * baseInterval
    }
  }

  mod.get = {
    current: function() {
      return mod.current
    },
    default: function() {
      return JSON.parse(JSON.stringify(mod.default));
    }
  }

  mod.current = {
    autosave: {
      interval: 1000
    },
    events: {
      interval: 300,
      all: []
    },
    tick: {
      interval: 300
    },
    readout: {
      interval: 100
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
        multiplier: 2,
        constant: null,
        difference: null,
        toast: null
      }
    },
    cycle: {
      current: 0,
      max: null,
      interval: {
        starting: null,
        current: null,
        min: 1000
      }
    },
    strategy: {
      autotoaster: {
        active: false,
        cost: {
          cycle: 4
        }
      },
      megatoaster: {
        active: false,
        cost: {
          cycle: 8
        }
      },
      rockettoaster: {
        active: false,
        cost: {
          cycle: 16
        }
      },
      atomictoaster: {
        active: false,
        cost: {
          cycle: 32
        }
      },
      quantumtoaster: {
        active: false,
        cost: {
          cycle: 64
        }
      }
    },
    autotoaster: {
      level: 0,
      toastperunit: null,
      cost: {
        multiplier: null,
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
        starting: null,
        current: null,
        min: 1000
      }
    },
    megatoaster: {
      level: 0,
      toastperunit: null,
      cost: {
        multiplier: null,
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
        starting: null,
        current: null,
        min: 1000
      }
    },
    rockettoaster: {
      level: 0,
      toastperunit: null,
      cost: {
        multiplier: null,
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
        starting: null,
        current: null,
        min: 1000
      }
    },
    atomictoaster: {
      level: 0,
      toastperunit: null,
      cost: {
        multiplier: null,
        constant: null,
        difference: null,
        toast: null
      }
    },
    atomictoasterspeed: {
      level: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      },
      interval: {
        starting: null,
        current: null,
        min: 1000
      }
    },
    quantumtoaster: {
      level: 0,
      toastperunit: null,
      cost: {
        multiplier: null,
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
        starting: null,
        current: null,
        min: 1000
      }
    },
    theme: {
      accent: {
        hsl: {
          h: 80,
          s: 100,
          l: 50
        },
        rgb: {
          r: 170,
          g: 255,
          b: 0
        },
        random: {
          active: false,
          style: "any"
        }
      },
      color: {
        hsl: {
          h: 220,
          s: 22,
          l: 40
        },
        rgb: {
          r: 80,
          g: 95,
          b: 124
        },
        contrast: {
          light: 6,
          dark: 3
        },
        generated: {}
      },
      style: "dark"
    },
    report: {
      message: {
        max: 100
      }
    },
    menu: false
  }

  // processor
  mod.current.processor.cost.constant = mod.formula.cost.constant(mod.current.processor.cost.multiplier)
  mod.current.processor.cost.difference = mod.formula.cost.difference.geometric(mod.current.processor.cost.multiplier)

  // cycle
  mod.current.cycle.interval.starting = mod.formula.interval(4)

  // autotoaster
  mod.current.autotoaster.toastperunit = mod.formula.toast.perUnit(1)
  mod.current.autotoaster.cost.multiplier = mod.formula.cost.multiplier(1)
  mod.current.autotoaster.cost.constant = mod.formula.cost.constant(mod.current.autotoaster.cost.multiplier)
  mod.current.autotoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.autotoaster.cost.multiplier)

  // autotoasterspeed
  mod.current.autotoasterspeed.interval.starting = mod.formula.interval(1)
  mod.current.autotoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.autotoaster.cost.multiplier)
  mod.current.autotoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.autotoaster.cost.multiplier)

  // megatoaster
  mod.current.megatoaster.toastperunit = mod.formula.toast.perUnit(2)
  mod.current.megatoaster.cost.multiplier = mod.formula.cost.multiplier(2)
  mod.current.megatoaster.cost.constant = mod.formula.cost.constant(mod.current.megatoaster.cost.multiplier)
  mod.current.megatoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.megatoaster.cost.multiplier)

  // megatoasterspeed
  mod.current.megatoasterspeed.interval.starting = mod.formula.interval(2)
  mod.current.megatoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.megatoaster.cost.multiplier)
  mod.current.megatoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.megatoaster.cost.multiplier)

  // rockettoaster
  mod.current.rockettoaster.toastperunit = mod.formula.toast.perUnit(4)
  mod.current.rockettoaster.cost.multiplier = mod.formula.cost.multiplier(4)
  mod.current.rockettoaster.cost.constant = mod.formula.cost.constant(mod.current.rockettoaster.cost.multiplier)
  mod.current.rockettoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.rockettoaster.cost.multiplier)

  // rockettoasterspeed
  mod.current.rockettoasterspeed.interval.starting = mod.formula.interval(4)
  mod.current.rockettoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.rockettoaster.cost.multiplier)
  mod.current.rockettoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.rockettoaster.cost.multiplier)

  // atomictoaster
  mod.current.atomictoaster.toastperunit = mod.formula.toast.perUnit(8)
  mod.current.atomictoaster.cost.multiplier = mod.formula.cost.multiplier(8)
  mod.current.atomictoaster.cost.constant = mod.formula.cost.constant(mod.current.atomictoaster.cost.multiplier)
  mod.current.atomictoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.atomictoaster.cost.multiplier)

  // atomictoasterspeed
  mod.current.atomictoasterspeed.interval.starting = mod.formula.interval(8)
  mod.current.atomictoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.atomictoaster.cost.multiplier)
  mod.current.atomictoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.atomictoaster.cost.multiplier)

  // quantumtoaster
  mod.current.quantumtoaster.toastperunit = mod.formula.toast.perUnit(16)
  mod.current.quantumtoaster.cost.multiplier = mod.formula.cost.multiplier(16)
  mod.current.quantumtoaster.cost.constant = mod.formula.cost.constant(mod.current.quantumtoaster.cost.multiplier)
  mod.current.quantumtoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.quantumtoaster.cost.multiplier)

  // quantumtoasterspeed
  mod.current.quantumtoasterspeed.interval.starting = mod.formula.interval(16)
  mod.current.quantumtoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.quantumtoaster.cost.multiplier)
  mod.current.quantumtoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.quantumtoaster.cost.multiplier)

  mod.default = {
    theme: {
      accent: {
        rgb: {
          r: 170,
          g: 255,
          b: 0
        }
      },
      color: {
        rgb: {
          r: 80,
          g: 95,
          b: 124
        },
        contrast: {
          light: 6,
          dark: 3
        }
      }
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
      object: mod.current,
      path: options.path,
      newValue: options.value
    })
  }

  mod.restore = function(data) {
    if ("state" in data) {
      mod.current = data.state
    }
  }

  var get = {
    current: function() {
      return mod.get.current()
    },
    default: function() {
      return JSON.parse(JSON.stringify(mod.default));
    }
  }

  var set = function(override) {
    mod.set(override)
  }

  var init = function() {
    if (data.load()) {
      mod.restore(data.load())
    }
  }

  return {
    mod: mod,
    get: get,
    set: set,
    init: init
  }

})()
