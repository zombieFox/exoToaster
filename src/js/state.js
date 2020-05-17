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
      return JSON.parse(JSON.stringify(mod.default))
    }
  }

  mod.current = {
    autosave: {
      interval: 1000
    },
    events: {
      all: {
        toaster: {
          open: {
            passed: false,
            restore: true
          }
        },
        processor: {
          open: {
            passed: false,
            restore: true
          }
        },
        cycle: {
          open: {
            passed: false,
            restore: true
          },
          start: {
            passed: false,
            restore: true
          },
          stop: {
            passed: false,
            restore: true
          },
        },
        strategy: {
          open: {
            condition: {
              processor: 4
            },
            passed: false,
            restore: true
          },
          autotoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 6
              },
              cost: {
                cycle: 2
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          megatoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 12
              },
              cost: {
                cycle: 4
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          rockettoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 18
              },
              cost: {
                cycle: 8
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          plasmatoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 24
              },
              cost: {
                cycle: 16
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          atomictoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 30
              },
              cost: {
                cycle: 32
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          quantumtoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 36
              },
              cost: {
                cycle: 64
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
        },
        autotoaster: {
          open: {
            passed: false,
            restore: true
          },
          active: {
            passed: false,
            restore: true
          }
        },
        megatoaster: {
          open: {
            passed: false,
            restore: true
          },
          active: {
            passed: false,
            restore: true
          }
        },
        rockettoaster: {
          open: {
            passed: false,
            restore: true
          },
          active: {
            passed: false,
            restore: true
          }
        },
        plasmatoaster: {
          open: {
            passed: false,
            restore: true
          },
          active: {
            passed: false,
            restore: true
          }
        },
        atomictoaster: {
          open: {
            passed: false,
            restore: true
          },
          active: {
            passed: false,
            restore: true
          }
        },
        quantumtoaster: {
          open: {
            passed: false,
            restore: true
          },
          active: {
            passed: false,
            restore: true
          }
        }
      },
      interval: 500
    },
    readout: {
      interval: 100
    },
    tick: {
      interval: 300
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
    autotoaster: {
      level: 0,
      toastperunit: null,
      efficiency: 0,
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
      efficiency: 0,
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
      efficiency: 0,
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
    plasmatoaster: {
      level: 0,
      toastperunit: null,
      efficiency: 0,
      cost: {
        multiplier: null,
        constant: null,
        difference: null,
        toast: null
      }
    },
    plasmatoasterspeed: {
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
      efficiency: 0,
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
      efficiency: 0,
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
        }
      },
      color: {
        hsl: {
          h: 220,
          s: 22,
          l: 50
        },
        rgb: {
          r: 99,
          g: 118,
          b: 156
        },
        contrast: {
          light: 4,
          dark: 4
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
  mod.current.cycle.interval.starting = mod.formula.interval(3)

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

  // plasmatoaster
  mod.current.plasmatoaster.toastperunit = mod.formula.toast.perUnit(8)
  mod.current.plasmatoaster.cost.multiplier = mod.formula.cost.multiplier(8)
  mod.current.plasmatoaster.cost.constant = mod.formula.cost.constant(mod.current.plasmatoaster.cost.multiplier)
  mod.current.plasmatoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.plasmatoaster.cost.multiplier)

  // plasmatoasterspeed
  mod.current.plasmatoasterspeed.interval.starting = mod.formula.interval(8)
  mod.current.plasmatoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.plasmatoaster.cost.multiplier)
  mod.current.plasmatoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.plasmatoaster.cost.multiplier)

  // atomictoaster
  mod.current.atomictoaster.toastperunit = mod.formula.toast.perUnit(16)
  mod.current.atomictoaster.cost.multiplier = mod.formula.cost.multiplier(16)
  mod.current.atomictoaster.cost.constant = mod.formula.cost.constant(mod.current.atomictoaster.cost.multiplier)
  mod.current.atomictoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.atomictoaster.cost.multiplier)

  // atomictoasterspeed
  mod.current.atomictoasterspeed.interval.starting = mod.formula.interval(16)
  mod.current.atomictoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.atomictoaster.cost.multiplier)
  mod.current.atomictoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.atomictoaster.cost.multiplier)

  // quantumtoaster
  mod.current.quantumtoaster.toastperunit = mod.formula.toast.perUnit(32)
  mod.current.quantumtoaster.cost.multiplier = mod.formula.cost.multiplier(32)
  mod.current.quantumtoaster.cost.constant = mod.formula.cost.constant(mod.current.quantumtoaster.cost.multiplier)
  mod.current.quantumtoaster.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.quantumtoaster.cost.multiplier)

  // quantumtoasterspeed
  mod.current.quantumtoasterspeed.interval.starting = mod.formula.interval(32)
  mod.current.quantumtoasterspeed.cost.constant = mod.formula.cost.constant(mod.current.quantumtoaster.cost.multiplier)
  mod.current.quantumtoasterspeed.cost.difference = mod.formula.cost.difference.arithmetic(mod.current.quantumtoaster.cost.multiplier)

  mod.default = {
    theme: {
      accent: {
        rgb: {
          r: 0,
          g: 80,
          b: 255
        }
      },
      color: {
        rgb: {
          r: 99,
          g: 118,
          b: 156
        },
        contrast: {
          light: 4,
          dark: 4
        },
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
      return mod.get.default()
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
