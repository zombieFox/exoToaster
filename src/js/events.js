var events = (function() {

  var mod = {}

  mod.background = function() {
    var all = [{
      func: function() {
        tick.mod.set({
          name: "autosave",
          func: function() {
            data.save()
          },
          interval: state.get.current().autosave.interval
        })
      }
    }, {
      func: function() {
        tick.mod.set({
          name: "events",
          func: function() {
            mod.check()
          },
          interval: state.get.current().events.interval
        })
      }
    }, {
      func: function() {
        tick.mod.set({
          name: "readout",
          func: function() {
            readout.render.all()
          },
          interval: state.get.current().readout.interval
        })
      }
    }]

    all.forEach(function(item, index) {
      if (item.func) {
        item.func()
      }
    })
  }

  mod.strings = {
    consumer: {
      start: {
        type: "normal",
        message: ["!-- warning --!", "toast matter stock reduced", "toast is being consumed", "!-- warning --!"],
        format: "normal"
      }
    },
    processor: {
      open: {
        type: "system",
        message: ["processor.data loaded"],
        format: "normal"
      }
    },
    cycle: {
      open: {
        type: "system",
        message: ["instruction_cycles.data loaded"],
        format: "normal"
      }
    },
    strategy: {
      open: {
        type: "system",
        message: ["strategy.data loaded"],
        format: "normal"
      },
      autotoaster: {
        displayName: "Auto Toaster",
        open: {
          type: "system",
          message: ["strategy.auto_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["auto_toaster.data loaded"],
          format: "normal"
        }
      },
      megatoaster: {
        displayName: "Mega Toaster",
        open: {
          type: "system",
          message: ["strategy.mega_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["mega_toaster.data loaded"],
          format: "normal"
        }
      },
      rockettoaster: {
        displayName: "Rocket Toaster",
        open: {
          type: "system",
          message: ["strategy.rocket_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["rocket_toaster.data loaded"],
          format: "normal"
        }
      },
      sonictoaster: {
        displayName: "Sonic Toaster",
        open: {
          type: "system",
          message: ["strategy.sonic_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["sonic_toaster.data loaded"],
          format: "normal"
        }
      },
      plasmatoaster: {
        displayName: "Plasma Toaster",
        open: {
          type: "system",
          message: ["strategy.plasma_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["plasma_toaster.data loaded"],
          format: "normal"
        }
      },
      atomictoaster: {
        displayName: "Atomic Toaster",
        open: {
          type: "system",
          message: ["strategy.atomic_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["atomic_toaster.data loaded"],
          format: "normal"
        }
      },
      quantumtoaster: {
        displayName: "Quantum Toaster",
        open: {
          type: "system",
          message: ["strategy.quantum_toaster.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["quantum_toaster.data loaded"],
          format: "normal"
        }
      },
      unmotivated: {
        displayName: "Unmotivated",
        open: {
          type: "system",
          message: ["strategy.unmotivated.data loaded"],
          format: "normal"
        },
        active: {
          type: "system",
          message: ["unmotivated.data loaded"],
          format: "normal"
        }
      }
    }
  }

  mod.addresses = [
    "all.consumer.start",
    "all.consumer.stop",
    "all.processor.open",
    "all.cycle.open",
    "all.cycle.start",
    "all.cycle.stop",
    "all.strategy.open",
    "all.strategy.autotoaster.open",
    "all.strategy.autotoaster.active",
    "all.strategy.megatoaster.open",
    "all.strategy.megatoaster.active",
    "all.strategy.rockettoaster.open",
    "all.strategy.rockettoaster.active",
    "all.strategy.sonictoaster.open",
    "all.strategy.sonictoaster.active",
    "all.strategy.plasmatoaster.open",
    "all.strategy.plasmatoaster.active",
    "all.strategy.atomictoaster.open",
    "all.strategy.atomictoaster.active",
    "all.strategy.quantumtoaster.open",
    "all.strategy.quantumtoaster.active",
    "all.strategy.unmotivated.open",
    "all.strategy.unmotivated.active",
    "all.autotoaster.open",
    "all.autotoaster.active",
    "all.megatoaster.open",
    "all.megatoaster.active",
    "all.rockettoaster.open",
    "all.rockettoaster.active",
    "all.sonictoaster.open",
    "all.sonictoaster.active",
    "all.plasmatoaster.open",
    "all.plasmatoaster.active",
    "all.atomictoaster.open",
    "all.atomictoaster.active",
    "all.quantumtoaster.open",
    "all.quantumtoaster.active",
    "all.unmotivated.open"
  ]

  mod.all = {
    consumer: {
      start: {
        condition: function() {
          return state.get.current().toast.lifetime.current >= state.get.current().events.all.consumer.start.condition.toast
        },
        stage: "consumer",
        report: mod.strings.consumer.start,
        func: function() {
          tick.mod.set({
            name: "consumer",
            func: function() {
              consumer.mod.add()
            },
            interval: function() {
              return consumer.mod.interval()
            }
          })
        }
      },
      stop: {
        condition: function() {
          return state.get.current().events.all.consumer.stop.passed
        },
        func: function() {
          tick.mod.remove("consumer")
        }
      }
    },
    processor: {
      open: {
        condition: function() {
          return state.get.current().toast.lifetime.current >= state.get.current().processor.cost.toast
        },
        stage: "processor",
        report: mod.strings.processor.open
      }
    },
    cycle: {
      open: {
        condition: function() {
          return state.get.current().processor.level > 2
        },
        stage: "cycle",
        report: mod.strings.cycle.open
      },
      start: {
        condition: function() {
          return state.get.current().processor.level > 2 && state.get.current().cycle.current != state.get.current().cycle.max
        },
        func: function() {
          cycle.mod.interval.animation()
          tick.mod.set({
            name: "cycle",
            func: function() {
              cycle.make(1)
              cycle.mod.interval.set()
              cycle.mod.interval.animation()
            },
            interval: function() {
              return state.get.current().cycle.interval.current
            }
          })
          state.get.current().events.all.cycle.stop.passed = false
        }
      },
      stop: {
        condition: function() {
          return state.get.current().cycle.current == state.get.current().cycle.max
        },
        func: function() {
          tick.mod.remove("cycle")
          state.get.current().events.all.cycle.start.passed = false
        }
      }
    },
    strategy: {
      open: {
        condition: function() {
          return state.get.current().processor.level >= state.get.current().events.all.strategy.open.condition.processor
        },
        stage: "strategy",
        report: mod.strings.strategy.open
      },
      autotoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.autotoaster.open.condition.processor
          },
          report: mod.strings.strategy.autotoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.autotoaster",
              name: "autotoaster",
              displayName: mod.strings.strategy.autotoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.autotoaster.active.level > 0
          },
          report: mod.strings.strategy.autotoaster.active
        }
      },
      megatoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.megatoaster.open.condition.processor
          },
          report: mod.strings.strategy.megatoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.megatoaster",
              name: "megatoaster",
              displayName: mod.strings.strategy.megatoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.megatoaster.active.level > 0
          },
          report: mod.strings.strategy.megatoaster.active
        }
      },
      rockettoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.rockettoaster.open.condition.processor
          },
          report: mod.strings.strategy.rockettoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.rockettoaster",
              name: "rockettoaster",
              displayName: mod.strings.strategy.rockettoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.rockettoaster.active.level > 0
          },
          report: mod.strings.strategy.rockettoaster.active
        }
      },
      sonictoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.sonictoaster.open.condition.processor
          },
          report: mod.strings.strategy.sonictoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.sonictoaster",
              name: "sonictoaster",
              displayName: mod.strings.strategy.sonictoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.sonictoaster.active.level > 0
          },
          report: mod.strings.strategy.sonictoaster.active
        }
      },
      plasmatoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.plasmatoaster.open.condition.processor
          },
          report: mod.strings.strategy.plasmatoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.plasmatoaster",
              name: "plasmatoaster",
              displayName: mod.strings.strategy.plasmatoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.plasmatoaster.active.level > 0
          },
          report: mod.strings.strategy.plasmatoaster.active
        }
      },
      atomictoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.atomictoaster.open.condition.processor
          },
          report: mod.strings.strategy.atomictoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.atomictoaster",
              name: "atomictoaster",
              displayName: mod.strings.strategy.atomictoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.atomictoaster.active.level > 0
          },
          report: mod.strings.strategy.atomictoaster.active
        }
      },
      quantumtoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.quantumtoaster.open.condition.processor
          },
          report: mod.strings.strategy.quantumtoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.quantumtoaster",
              name: "quantumtoaster",
              displayName: mod.strings.strategy.quantumtoaster.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.quantumtoaster.active.level > 0
          },
          report: mod.strings.strategy.quantumtoaster.active
        }
      },
      unmotivated: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.unmotivated.open.condition.processor
          },
          report: mod.strings.strategy.unmotivated.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.unmotivated",
              name: "unmotivated",
              displayName: mod.strings.strategy.unmotivated.displayName
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.unmotivated.active.level > 0
          },
          report: mod.strings.strategy.unmotivated.active
        }
      }
    },
    autotoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.autotoaster.active.passed
        },
        stage: "autotoaster"
      },
      active: {
        condition: function() {
          return state.get.current().autotoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=autotoaster]").classList.add("active")
          autotoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "autotoaster",
            func: function() {
              toast.make(state.get.current().autotoaster.level * (state.get.current().autotoaster.toastperunit + state.get.current().autotoaster.efficiency))
              autotoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().autotoasterspeed.interval.current
            }
          })
        }
      },
      efficiency1: {
        
      }
    },
    megatoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.megatoaster.active.passed
        },
        stage: "megatoaster"
      },
      active: {
        condition: function() {
          return state.get.current().megatoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=megatoaster]").classList.add("active")
          megatoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "megatoaster",
            func: function() {
              toast.make(state.get.current().megatoaster.level * (state.get.current().megatoaster.toastperunit + state.get.current().megatoaster.efficiency))
              megatoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().megatoasterspeed.interval.current
            }
          })
        }
      }
    },
    rockettoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.rockettoaster.active.passed
        },
        stage: "rockettoaster"
      },
      active: {
        condition: function() {
          return state.get.current().rockettoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=rockettoaster]").classList.add("active")
          rockettoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "rockettoaster",
            func: function() {
              toast.make(state.get.current().rockettoaster.level * (state.get.current().rockettoaster.toastperunit + state.get.current().rockettoaster.efficiency))
              rockettoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().rockettoasterspeed.interval.current
            }
          })
        }
      }
    },
    sonictoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.sonictoaster.active.passed
        },
        stage: "sonictoaster"
      },
      active: {
        condition: function() {
          return state.get.current().sonictoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=sonictoaster]").classList.add("active")
          sonictoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "sonictoaster",
            func: function() {
              toast.make(state.get.current().sonictoaster.level * (state.get.current().sonictoaster.toastperunit + state.get.current().sonictoaster.efficiency))
              sonictoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().sonictoasterspeed.interval.current
            }
          })
        }
      }
    },
    plasmatoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.plasmatoaster.active.passed
        },
        stage: "plasmatoaster"
      },
      active: {
        condition: function() {
          return state.get.current().plasmatoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=plasmatoaster]").classList.add("active")
          plasmatoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "plasmatoaster",
            func: function() {
              toast.make(state.get.current().plasmatoaster.level * (state.get.current().plasmatoaster.toastperunit + state.get.current().plasmatoaster.efficiency))
              plasmatoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().plasmatoasterspeed.interval.current
            }
          })
        }
      }
    },
    atomictoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.atomictoaster.active.passed
        },
        stage: "atomictoaster"
      },
      active: {
        condition: function() {
          return state.get.current().atomictoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=atomictoaster]").classList.add("active")
          atomictoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "atomictoaster",
            func: function() {
              toast.make(state.get.current().atomictoaster.level * (state.get.current().atomictoaster.toastperunit + state.get.current().atomictoaster.efficiency))
              atomictoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().atomictoasterspeed.interval.current
            }
          })
        }
      }
    },
    quantumtoaster: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.quantumtoaster.active.passed
        },
        stage: "quantumtoaster"
      },
      active: {
        condition: function() {
          return state.get.current().quantumtoaster.level >= 1
        },
        func: function() {
          helper.e("[stage=quantumtoaster]").classList.add("active")
          quantumtoasterspeed.setCardMeterDuration()
          tick.mod.set({
            name: "quantumtoaster",
            func: function() {
              toast.make(state.get.current().quantumtoaster.level * (state.get.current().quantumtoaster.toastperunit + state.get.current().quantumtoaster.efficiency))
              quantumtoasterspeed.setCardMeterDuration()
            },
            interval: function() {
              return state.get.current().quantumtoasterspeed.interval.current
            }
          })
        }
      }
    },
    unmotivated: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.unmotivated.active.level >= 1
        },
        stage: "unmotivated"
      }
    }
  }

  mod.check = function() {
    var action = function functionName(path) {
      // get state data
      var stateData = helper.getObject({
        object: state.get.current(),
        path: "events." + path
      })

      // if event is not passed
      if (!stateData.passed) {
        // get event data
        var eventData = helper.getObject({
          object: mod,
          path: path
        })

        // check if event condition has been met
        if (eventData.condition()) {
          // set event to passed so event will not be evaluated again
          helper.setObject({
            object: state.get.current(),
            path: "events." + path + ".passed",
            newValue: true
          })

          // run event data
          if (eventData.stage) {
            render.unlock(eventData.stage)
          }
          if (eventData.report) {
            render.report(eventData.report)
          }
          if (eventData.func) {
            eventData.func()
          }
        }
      }
    }

    mod.addresses.forEach(function(path, index) {
      action(path)
    })
  }

  mod.update = function() {
    var action = function functionName(path) {
      // get state data
      var stateData = helper.getObject({
        object: state.get.current(),
        path: "events." + path
      })

      // if event is not passed and should be restored
      if (stateData.passed && stateData.restore) {
        // get event data
        var eventData = helper.getObject({
          object: mod,
          path: path
        })

        // run event data
        if (eventData.stage) {
          render.unlock(eventData.stage)
        }
        if (eventData.func) {
          eventData.func()
        }
      }
    }

    mod.addresses.forEach(function(path, index) {
      action(path)
    })
  }

  var render = {}

  render.unlock = function(name) {
    helper.e("[stage=" + name + "]").classList.remove("is-hidden")
  }

  render.lock = function(name) {
    helper.e("[stage=" + name + "]").classList.add("is-hidden")
  }

  render.report = function(data) {
    report.render({
      type: data.type,
      message: data.message,
      format: data.format
    })
  }

  var init = function() {
    mod.background()
    mod.update()
  }

  return {
    mod: mod,
    init: init
  }

})()
