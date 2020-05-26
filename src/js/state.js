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
    autosave: {
      interval: 1000
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
                processor: 15
              },
              cost: {
                cycle: 256
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
                processor: 22
              },
              cost: {
                cycle: 256
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
      milestone: {
        efficiency: null
      },
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
      milestone: {
        efficiency: null
      },
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
      milestone: {
        efficiency: null
      },
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
      milestone: {
        efficiency: null
      },
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
      milestone: {
        efficiency: null
      },
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
      milestone: {
        efficiency: null
      },
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
      milestone: {
        efficiency: null
      },
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
      level: 0,
      max: 10,
      interval: 200,
      active: false
    },
    strategy: {
      next: null
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
