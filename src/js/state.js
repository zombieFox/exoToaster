var state = (function() {

  var mod = {}

  mod.formula = {
    toastPerUnit: function(number) {
      return 1 * number * number
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
      return (number * 6) * 1000
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
          unmotivated: {
            open: {
              passed: false,
              restore: true,
              condition: {
                processor: 32
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
        unmotivated: {
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
    processor: {
      unitmultiplier: 2,
      level: 1,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    cycle: {
      current: 0,
      max: null,
      interval: {
        starting: mod.formula.interval(3),
        current: null,
        min: 1000
      }
    },
    autotoaster: {
      unitmultiplier: 1,
      toastperunit: null,
      level: 0,
      efficiency: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    autotoasterspeed: {
      unitmultiplier: 1,
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
      unitmultiplier: 2,
      toastperunit: null,
      level: 0,
      efficiency: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    megatoasterspeed: {
      unitmultiplier: 2,
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
      unitmultiplier: 4,
      toastperunit: null,
      level: 0,
      efficiency: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    rockettoasterspeed: {
      unitmultiplier: 4,
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
      unitmultiplier: 8,
      toastperunit: null,
      level: 0,
      efficiency: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    plasmatoasterspeed: {
      unitmultiplier: 8,
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
      unitmultiplier: 16,
      toastperunit: null,
      level: 0,
      efficiency: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    atomictoasterspeed: {
      unitmultiplier: 16,
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
      unitmultiplier: 32,
      toastperunit: null,
      level: 0,
      efficiency: 0,
      cost: {
        constant: null,
        difference: null,
        toast: null
      }
    },
    quantumtoasterspeed: {
      unitmultiplier: 32,
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
