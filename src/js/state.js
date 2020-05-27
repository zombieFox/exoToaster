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
    events: {
      all: {
        consumer: {
          start: {
            condition: {
              toast: 300
            },
            passed: false,
            restore: true
          },
          stop: {
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
        electromagnetic: {
          open: {
            passed: false,
            restore: true
          }
        },
        sonic: {
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
          }
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
                processor: 4
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
                processor: 8
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
                processor: 12
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
          sonictoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 16
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
          plasmatoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 20
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
          atomictoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 24
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
          quantumtoaster: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 28
              },
              cost: {
                cycle: 128
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          motivation: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 24
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
          electromagnetic: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 16
              },
              cost: {
                cycle: 128
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          },
          sonic: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 24
              },
              cost: {
                cycle: 128
              }
            },
            active: {
              level: 0,
              passed: false,
              restore: true
            }
          }
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
        sonictoaster: {
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
        },
        motivation: {
          open: {
            passed: false,
            restore: true
          }
        }
      }
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
      max: null,
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
    motivation: {
      level: 1,
      step: 0,
      max: 10,
      count: 0,
      running: false,
      interval: 200
    },
    strategy: {
      next: null
    },
    upgrade: {
      autotoaster: {
        efficiency: [{
          name: string.mod.upgrade.rockettoaster.efficiency.name,
          description: string.mod.upgrade.autotoaster.efficiency.description,
          targetValue: "autotoaster.efficiency",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.efficiency.name,
          description: string.mod.upgrade.autotoaster.efficiency.description,
          targetValue: "autotoaster.efficiency",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.efficiency.name,
          description: string.mod.upgrade.autotoaster.efficiency.description,
          targetValue: "autotoaster.efficiency",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.efficiency.name,
          description: string.mod.upgrade.autotoaster.efficiency.description,
          targetValue: "autotoaster.efficiency",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.autotoaster.speed.name,
          description: string.mod.upgrade.autotoaster.speed.description,
          targetValue: "autotoaster.speed",
          targetStage: "autotoaster",
          check: "autotoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      megatoaster: {
        efficiency: [{
          name: string.mod.upgrade.megatoaster.efficiency.name,
          description: string.mod.upgrade.megatoaster.efficiency.description,
          targetValue: "megatoaster.efficiency",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.efficiency.name,
          description: string.mod.upgrade.megatoaster.efficiency.description,
          targetValue: "megatoaster.efficiency",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.efficiency.name,
          description: string.mod.upgrade.megatoaster.efficiency.description,
          targetValue: "megatoaster.efficiency",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.efficiency.name,
          description: string.mod.upgrade.megatoaster.efficiency.description,
          targetValue: "megatoaster.efficiency",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.megatoaster.speed.name,
          description: string.mod.upgrade.megatoaster.speed.description,
          targetValue: "megatoaster.speed",
          targetStage: "megatoaster",
          check: "megatoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      rockettoaster: {
        efficiency: [{
          name: string.mod.upgrade.rockettoaster.efficiency.name,
          description: string.mod.upgrade.rockettoaster.efficiency.description,
          targetValue: "rockettoaster.efficiency",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.efficiency.name,
          description: string.mod.upgrade.rockettoaster.efficiency.description,
          targetValue: "rockettoaster.efficiency",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.efficiency.name,
          description: string.mod.upgrade.rockettoaster.efficiency.description,
          targetValue: "rockettoaster.efficiency",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.efficiency.name,
          description: string.mod.upgrade.rockettoaster.efficiency.description,
          targetValue: "rockettoaster.efficiency",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.rockettoaster.speed.name,
          description: string.mod.upgrade.rockettoaster.speed.description,
          targetValue: "rockettoaster.speed",
          targetStage: "rockettoaster",
          check: "rockettoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      sonictoaster: {
        efficiency: [{
          name: string.mod.upgrade.sonictoaster.efficiency.name,
          description: string.mod.upgrade.sonictoaster.efficiency.description,
          targetValue: "sonictoaster.efficiency",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.efficiency.name,
          description: string.mod.upgrade.sonictoaster.efficiency.description,
          targetValue: "sonictoaster.efficiency",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.efficiency.name,
          description: string.mod.upgrade.sonictoaster.efficiency.description,
          targetValue: "sonictoaster.efficiency",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.efficiency.name,
          description: string.mod.upgrade.sonictoaster.efficiency.description,
          targetValue: "sonictoaster.efficiency",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.sonictoaster.speed.name,
          description: string.mod.upgrade.sonictoaster.speed.description,
          targetValue: "sonictoaster.speed",
          targetStage: "sonictoaster",
          check: "sonictoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      plasmatoaster: {
        efficiency: [{
          name: string.mod.upgrade.plasmatoaster.efficiency.name,
          description: string.mod.upgrade.plasmatoaster.efficiency.description,
          targetValue: "plasmatoaster.efficiency",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.efficiency.name,
          description: string.mod.upgrade.plasmatoaster.efficiency.description,
          targetValue: "plasmatoaster.efficiency",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.efficiency.name,
          description: string.mod.upgrade.plasmatoaster.efficiency.description,
          targetValue: "plasmatoaster.efficiency",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.efficiency.name,
          description: string.mod.upgrade.plasmatoaster.efficiency.description,
          targetValue: "plasmatoaster.efficiency",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.plasmatoaster.speed.name,
          description: string.mod.upgrade.plasmatoaster.speed.description,
          targetValue: "plasmatoaster.speed",
          targetStage: "plasmatoaster",
          check: "plasmatoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      atomictoaster: {
        efficiency: [{
          name: string.mod.upgrade.atomictoaster.efficiency.name,
          description: string.mod.upgrade.atomictoaster.efficiency.description,
          targetValue: "atomictoaster.efficiency",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.efficiency.name,
          description: string.mod.upgrade.atomictoaster.efficiency.description,
          targetValue: "atomictoaster.efficiency",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.efficiency.name,
          description: string.mod.upgrade.atomictoaster.efficiency.description,
          targetValue: "atomictoaster.efficiency",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.efficiency.name,
          description: string.mod.upgrade.atomictoaster.efficiency.description,
          targetValue: "atomictoaster.efficiency",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.atomictoaster.speed.name,
          description: string.mod.upgrade.atomictoaster.speed.description,
          targetValue: "atomictoaster.speed",
          targetStage: "atomictoaster",
          check: "atomictoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      quantumtoaster: {
        efficiency: [{
          name: string.mod.upgrade.quantumtoaster.efficiency.name,
          description: string.mod.upgrade.quantumtoaster.efficiency.description,
          targetValue: "quantumtoaster.efficiency",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.efficiency.name,
          description: string.mod.upgrade.quantumtoaster.efficiency.description,
          targetValue: "quantumtoaster.efficiency",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.efficiency.name,
          description: string.mod.upgrade.quantumtoaster.efficiency.description,
          targetValue: "quantumtoaster.efficiency",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.efficiency.name,
          description: string.mod.upgrade.quantumtoaster.efficiency.description,
          targetValue: "quantumtoaster.efficiency",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 800,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }],
        speed: [{
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 8,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 16,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 150,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 24,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 250,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 40,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 300,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 48,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.quantumtoaster.speed.name,
          description: string.mod.upgrade.quantumtoaster.speed.description,
          targetValue: "quantumtoaster.speed",
          targetStage: "quantumtoaster",
          check: "quantumtoaster.level",
          comparisonOperators: "greater",
          condition: 350,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 56,
          onscreen: false,
          passed: false
        }]
      },
      motivation: {
        level: [{
          name: string.mod.upgrade.motivation.level.name,
          description: string.mod.upgrade.motivation.level.description,
          targetValue: "motivation.level",
          targetStage: "motivation",
          check: "motivation.count",
          comparisonOperators: "greater",
          condition: 50,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 32,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.motivation.level.name,
          description: string.mod.upgrade.motivation.level.description,
          targetValue: "motivation.level",
          targetStage: "motivation",
          check: "motivation.count",
          comparisonOperators: "greater",
          condition: 100,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 64,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.motivation.level.name,
          description: string.mod.upgrade.motivation.level.description,
          targetValue: "motivation.level",
          targetStage: "motivation",
          check: "motivation.count",
          comparisonOperators: "greater",
          condition: 200,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 128,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.motivation.level.name,
          description: string.mod.upgrade.motivation.level.description,
          targetValue: "motivation.level",
          targetStage: "motivation",
          check: "motivation.count",
          comparisonOperators: "greater",
          condition: 400,
          success: "add",
          bonus: 1,
          currency: "cycle",
          cost: 256,
          onscreen: false,
          passed: false
        }],
        interval: [{
          name: string.mod.upgrade.motivation.interval.name,
          description: string.mod.upgrade.motivation.interval.description,
          targetValue: "motivation.interval",
          targetStage: "motivation",
          check: "motivation.level",
          comparisonOperators: "greater",
          condition: 3,
          success: "add",
          bonus: 200,
          currency: "cycle",
          cost: 256,
          onscreen: false,
          passed: false
        }, {
          name: string.mod.upgrade.motivation.interval.name,
          description: string.mod.upgrade.motivation.interval.description,
          targetValue: "motivation.interval",
          targetStage: "motivation",
          check: "motivation.level",
          comparisonOperators: "greater",
          condition: 4,
          success: "add",
          bonus: 200,
          currency: "cycle",
          cost: 256,
          onscreen: false,
          passed: false
        }]
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
