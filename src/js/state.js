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
      interval: 100,
      all: []
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
        starting: null
      }
    },
    atomictoasterefficiency: {
      level: 1,
      cost: {
        constant: null,
        difference: null,
        toast: null
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
  current.processor.cost.constant = mod.formula.cost.constant(current.processor.cost.multiplier)
  current.processor.cost.difference = mod.formula.cost.difference.geometric(current.processor.cost.multiplier)

  // autotoaster
  current.autotoaster.toastperunit = mod.formula.toast.perUnit(1)
  current.autotoaster.cost.multiplier = mod.formula.cost.multiplier(1)
  current.autotoaster.cost.constant = mod.formula.cost.constant(current.autotoaster.cost.multiplier)
  current.autotoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.autotoaster.cost.multiplier)

  // autotoasterspeed
  current.autotoasterspeed.interval.starting = mod.formula.interval(1)
  current.autotoasterspeed.cost.constant = mod.formula.cost.constant(current.autotoaster.cost.multiplier)
  current.autotoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.autotoaster.cost.multiplier)

  // autotoasterefficiency
  current.autotoasterefficiency.cost.constant = mod.formula.cost.constant(current.autotoaster.cost.multiplier)
  current.autotoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.autotoaster.cost.multiplier)

  // megatoaster
  current.megatoaster.toastperunit = mod.formula.toast.perUnit(2)
  current.megatoaster.cost.multiplier = mod.formula.cost.multiplier(2)
  current.megatoaster.cost.constant = mod.formula.cost.constant(current.megatoaster.cost.multiplier)
  current.megatoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.megatoaster.cost.multiplier)

  // megatoasterspeed
  current.megatoasterspeed.interval.starting = mod.formula.interval(2)
  current.megatoasterspeed.cost.constant = mod.formula.cost.constant(current.megatoaster.cost.multiplier)
  current.megatoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.megatoaster.cost.multiplier)

  // megatoasterefficiency
  current.megatoasterefficiency.cost.constant = mod.formula.cost.constant(current.megatoaster.cost.multiplier)
  current.megatoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.megatoaster.cost.multiplier)

  // rockettoaster
  current.rockettoaster.toastperunit = mod.formula.toast.perUnit(4)
  current.rockettoaster.cost.multiplier = mod.formula.cost.multiplier(4)
  current.rockettoaster.cost.constant = mod.formula.cost.constant(current.rockettoaster.cost.multiplier)
  current.rockettoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.rockettoaster.cost.multiplier)

  // rockettoasterspeed
  current.rockettoasterspeed.interval.starting = mod.formula.interval(4)
  current.rockettoasterspeed.cost.constant = mod.formula.cost.constant(current.rockettoaster.cost.multiplier)
  current.rockettoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.rockettoaster.cost.multiplier)

  // rockettoasterefficiency
  current.rockettoasterefficiency.cost.constant = mod.formula.cost.constant(current.rockettoaster.cost.multiplier)
  current.rockettoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.rockettoaster.cost.multiplier)

  // atomictoaster
  current.atomictoaster.toastperunit = mod.formula.toast.perUnit(8)
  current.atomictoaster.cost.multiplier = mod.formula.cost.multiplier(8)
  current.atomictoaster.cost.constant = mod.formula.cost.constant(current.atomictoaster.cost.multiplier)
  current.atomictoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.atomictoaster.cost.multiplier)

  // atomictoasterspeed
  current.atomictoasterspeed.interval.starting = mod.formula.interval(8)
  current.atomictoasterspeed.cost.constant = mod.formula.cost.constant(current.atomictoaster.cost.multiplier)
  current.atomictoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.atomictoaster.cost.multiplier)

  // atomictoasterefficiency
  current.atomictoasterefficiency.cost.constant = mod.formula.cost.constant(current.atomictoaster.cost.multiplier)
  current.atomictoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.atomictoaster.cost.multiplier)

  // quantumtoaster
  current.quantumtoaster.toastperunit = mod.formula.toast.perUnit(16)
  current.quantumtoaster.cost.multiplier = mod.formula.cost.multiplier(16)
  current.quantumtoaster.cost.constant = mod.formula.cost.constant(current.quantumtoaster.cost.multiplier)
  current.quantumtoaster.cost.difference = mod.formula.cost.difference.arithmetic(current.quantumtoaster.cost.multiplier)

  // quantumtoasterspeed
  current.quantumtoasterspeed.interval.starting = mod.formula.interval(16)
  current.quantumtoasterspeed.cost.constant = mod.formula.cost.constant(current.quantumtoaster.cost.multiplier)
  current.quantumtoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(current.quantumtoaster.cost.multiplier)

  // quantumtoasterefficiency
  current.quantumtoasterefficiency.cost.constant = mod.formula.cost.constant(current.quantumtoaster.cost.multiplier)
  current.quantumtoasterefficiency.cost.difference = mod.formula.cost.difference.arithmetic(current.quantumtoaster.cost.multiplier)

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
