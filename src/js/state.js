var state = (function() {

  var mod = {}

  mod.formula = {
    toastPerUnit: function(number) {
      return Math.pow(number, 2)
    },
    cost: {
      constant: function(multiplier) {
        return multiplier * 4
      },
      difference: {
        arithmetic: function(multiplier) {
          return (multiplier * 2) * 4
        },
        geometric: function(multiplier) {
          return (multiplier / 10) + 1
        }
      }
    },
    interval: function(number) {
      return (number * 5) * 1000
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
    background: {
      interval: 2000
    },
    readout: {
      interval: 150
    },
    toast: {
      lifetime: {
        current: 0
      },
      inventory: {
        current: 0
      }
    },
    consumer: {
      current: 0
    },
    processor: {
      level: null,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    electromagnetic: {
      level: null,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    sonic: {
      level: null,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    cycle: {
      current: 0,
      max: 2,
      maxmultiplier: 2,
      interval: {
        starting: mod.formula.interval(3),
        current: null,
        min: 1000
      }
    },
    speed: {
      level: null,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    motivation: {
      level: 1,
      step: 0,
      max: 10,
      count: 0,
      speed: 1,
      interval: null,
      running: false
    },
    autotoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    megatoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    rockettoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    sonictoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    plasmatoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    atomictoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    quantumtoaster: {
      level: null,
      toastperunit: null,
      efficiency: null,
      motivation: null,
      speed: null,
      interval: null,
      output: {
        unit: null,
        total: null,
        persec: null
      },
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    event: {
      processor: {
        open: [{
          condition: [{
            check: "toast.lifetime.current",
            operator: ">=",
            value: 10
          }],
          passed: false
        }]
      },
      consumer: {
        open: [{
          condition: [{
            check: "toast.lifetime.current",
            operator: ">=",
            value: 300
          }],
          passed: false
        }]
      },
      cycle: {
        open: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 2
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "cycle.current",
            operator: "<",
            value: 2
          }, {
            check: "processor.level",
            operator: ">=",
            value: 2
          }],
          passed: false
        }],
        stop: [{
          condition: [{
            check: "cycle.current",
            operator: "==",
            value: 2
          }],
          passed: false
        }]
      },
      motivation: {
        open: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        level1: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.level",
            operator: "==",
            value: 1
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 50
          }],
          passed: false
        }],
        level2: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.level",
            operator: "==",
            value: 2
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 100
          }],
          passed: false
        }],
        level3: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.level",
            operator: "==",
            value: 3
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 200
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.speed",
            operator: "==",
            value: 1
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 40
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.speed",
            operator: "==",
            value: 2
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 80
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.speed",
            operator: "==",
            value: 3
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 120
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.speed",
            operator: "==",
            value: 4
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 160
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.speed",
            operator: "==",
            value: 5
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 200
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "strategy.motivation.passed",
            operator: "==",
            value: true
          }, {
            check: "motivation.speed",
            operator: "==",
            value: 6
          }, {
            check: "motivation.count",
            operator: ">=",
            value: 240
          }],
          passed: false
        }]
      },
      autotoaster: {
        open: [{
          condition: [{
            check: "strategy.autotoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.autotoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "autotoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "autotoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "autotoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "autotoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "autotoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "autotoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "autotoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      megatoaster: {
        open: [{
          condition: [{
            check: "strategy.megatoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.megatoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "megatoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "megatoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "megatoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "megatoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "megatoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "megatoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "megatoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      rockettoaster: {
        open: [{
          condition: [{
            check: "strategy.rockettoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.rockettoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "rockettoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "rockettoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "rockettoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "rockettoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "rockettoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "rockettoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "rockettoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      sonictoaster: {
        open: [{
          condition: [{
            check: "strategy.sonictoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.sonictoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "sonictoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "sonictoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "sonictoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "sonictoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "sonictoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "sonictoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "sonictoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      plasmatoaster: {
        open: [{
          condition: [{
            check: "strategy.plasmatoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.plasmatoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "plasmatoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "plasmatoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "plasmatoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "plasmatoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "plasmatoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "plasmatoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "plasmatoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      atomictoaster: {
        open: [{
          condition: [{
            check: "strategy.atomictoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.atomictoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "atomictoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "atomictoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "atomictoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "atomictoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "atomictoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "atomictoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "atomictoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      quantumtoaster: {
        open: [{
          condition: [{
            check: "strategy.quantumtoaster.passed",
            operator: "==",
            value: true
          }],
          passed: false
        }],
        start: [{
          condition: [{
            check: "strategy.quantumtoaster.passed",
            operator: "==",
            value: true
          }, {
            check: "quantumtoaster.level",
            operator: ">",
            value: 0
          }],
          passed: false
        }],
        efficiency1: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "quantumtoaster.efficiency",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        efficiency2: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "quantumtoaster.efficiency",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        efficiency3: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 400
          }, {
            check: "quantumtoaster.efficiency",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        efficiency4: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 800
          }, {
            check: "quantumtoaster.efficiency",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed1: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 50
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 0
          }],
          passed: false
        }],
        speed2: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 100
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 1
          }],
          passed: false
        }],
        speed3: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 150
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 2
          }],
          passed: false
        }],
        speed4: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 200
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 3
          }],
          passed: false
        }],
        speed5: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 250
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 4
          }],
          passed: false
        }],
        speed6: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 300
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 5
          }],
          passed: false
        }],
        speed7: [{
          condition: [{
            check: "quantumtoaster.level",
            operator: ">=",
            value: 350
          }, {
            check: "quantumtoaster.speed",
            operator: "==",
            value: 6
          }],
          passed: false
        }]
      },
      strategy: {
        open: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 4
          }],
          passed: false
        }],
        motivation: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 24
          }],
          passed: false
        }],
        autotoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 4
          }, {
            check: "strategy.autotoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }],
        megatoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 8
          }, {
            check: "strategy.megatoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }],
        rockettoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 12
          }, {
            check: "strategy.rockettoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }],
        sonictoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 16
          }, {
            check: "strategy.sonictoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }],
        plasmatoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 20
          }, {
            check: "strategy.plasmatoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }],
        atomictoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 24
          }, {
            check: "strategy.atomictoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }],
        quantumtoaster: [{
          condition: [{
            check: "processor.level",
            operator: ">=",
            value: 28
          }, {
            check: "strategy.quantumtoaster.passed",
            operator: "==",
            value: false
          }],
          passed: false
        }]
      }
    },
    strategy: {
      next: 0,
      motivation: {
        passed: false,
        cost: 32
      },
      autotoaster: {
        passed: false,
        cost: 2
      },
      megatoaster: {
        passed: false,
        cost: 4
      },
      rockettoaster: {
        passed: false,
        cost: 8
      },
      sonictoaster: {
        passed: false,
        cost: 16
      },
      plasmatoaster: {
        passed: false,
        cost: 32
      },
      atomictoaster: {
        passed: false,
        cost: 64
      },
      quantumtoaster: {
        passed: false,
        cost: 128
      }
    },
    upgrade: {
      motivation: {
        level1: {
          passed: false,
          cost: 64
        },
        level2: {
          passed: false,
          cost: 128
        },
        level3: {
          passed: false,
          cost: 256
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 32
        },
        speed4: {
          passed: false,
          cost: 64
        },
        speed5: {
          passed: false,
          cost: 128
        },
        speed6: {
          passed: false,
          cost: 256
        }
      },
      autotoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
      },
      megatoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
      },
      rockettoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
      },
      sonictoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
      },
      plasmatoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
      },
      atomictoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
      },
      quantumtoaster: {
        efficiency1: {
          passed: false,
          cost: 8
        },
        efficiency2: {
          passed: false,
          cost: 16
        },
        efficiency3: {
          passed: false,
          cost: 32
        },
        efficiency4: {
          passed: false,
          cost: 64
        },
        speed1: {
          passed: false,
          cost: 8
        },
        speed2: {
          passed: false,
          cost: 16
        },
        speed3: {
          passed: false,
          cost: 24
        },
        speed4: {
          passed: false,
          cost: 32
        },
        speed5: {
          passed: false,
          cost: 40
        },
        speed6: {
          passed: false,
          cost: 48
        },
        speed7: {
          passed: false,
          cost: 56
        },
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
    menu: false,
    modal: false
  }

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
    },
    report: {
      message: {
        max: 100
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
