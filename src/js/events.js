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
    processor: {
      open: ["processor.data loaded"]
    },
    cycle: {
      open: ["instruction_cycles.data loaded"]
    },
    strategy: {
      open: ["strategy.data loaded"],
      autotoaster: {
        displayName: "Auto Toaster",
        open: ["strategy.auto_toaster.data loaded"],
        active: ["auto_toaster.data loaded"]
      },
      megatoaster: {
        displayName: "Mega Toaster",
        open: ["strategy.mega_toaster.data loaded"],
        active: ["mega_toaster.data loaded"]
      },
      rockettoaster: {
        displayName: "Rocket Toaster",
        open: ["strategy.rocket_toaster.data loaded"],
        active: ["rocket_toaster.data loaded"]
      },
      plasmatoaster: {
        displayName: "Plasma Toaster",
        open: ["strategy.plasma_toaster.data loaded"],
        active: ["plasma_toaster.data loaded"]
      },
      atomictoaster: {
        displayName: "Atomic Toaster",
        open: ["strategy.atomic_toaster.data loaded"],
        active: ["atomic_toaster.data loaded"]
      },
      quantumtoaster: {
        displayName: "Quantum Toaster",
        open: ["strategy.quantum_toaster.data loaded"],
        active: ["quantum_toaster.data loaded"]
      },
      unmotivated: {
        open: ["strategy.unmotivated.data loaded"],
        active: ["unmotivated.data loaded"]
      }
    }
  }

  mod.addresses = [
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
    "all.strategy.plasmatoaster.open",
    "all.strategy.plasmatoaster.active",
    "all.strategy.atomictoaster.open",
    "all.strategy.atomictoaster.active",
    "all.strategy.quantumtoaster.open",
    "all.strategy.quantumtoaster.active",
    "all.autotoaster.open",
    "all.autotoaster.active",
    "all.megatoaster.open",
    "all.megatoaster.active",
    "all.rockettoaster.open",
    "all.rockettoaster.active",
    "all.plasmatoaster.open",
    "all.plasmatoaster.active",
    "all.atomictoaster.open",
    "all.atomictoaster.active",
    "all.quantumtoaster.open",
    "all.quantumtoaster.active"
  ]

  mod.all = {
    processor: {
      open: {
        condition: function() {
          return state.get.current().toast.inventory.current >= state.get.current().processor.cost.toast
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
          helper.setObject({
            object: state.get.current(),
            path: "events.all.cycle.stop.passed",
            newValue: false
          })
        }
      },
      stop: {
        condition: function() {
          return state.get.current().cycle.current == state.get.current().cycle.max
        },
        func: function() {
          tick.mod.remove("cycle")
          helper.setObject({
            object: state.get.current(),
            path: "events.all.cycle.start.passed",
            newValue: false
          })
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
          autotoasterspeed.cardAnimationInterval()
          tick.mod.set({
            name: "autotoaster",
            func: function() {
              toast.make(state.get.current().autotoaster.level * (state.get.current().autotoaster.toastperunit + state.get.current().autotoaster.efficiency))
              autotoasterspeed.cardAnimationInterval()
            },
            interval: function() {
              return state.get.current().autotoasterspeed.interval.current
            }
          })
        }
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
          megatoasterspeed.cardAnimationInterval()
          tick.mod.set({
            name: "megatoaster",
            func: function() {
              toast.make(state.get.current().megatoaster.level * (state.get.current().megatoaster.toastperunit + state.get.current().megatoaster.efficiency))
              megatoasterspeed.cardAnimationInterval()
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
          rockettoasterspeed.cardAnimationInterval()
          tick.mod.set({
            name: "rockettoaster",
            func: function() {
              toast.make(state.get.current().rockettoaster.level * (state.get.current().rockettoaster.toastperunit + state.get.current().rockettoaster.efficiency))
              rockettoasterspeed.cardAnimationInterval()
            },
            interval: function() {
              return state.get.current().rockettoasterspeed.interval.current
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
          plasmatoasterspeed.cardAnimationInterval()
          tick.mod.set({
            name: "plasmatoaster",
            func: function() {
              toast.make(state.get.current().plasmatoaster.level * (state.get.current().plasmatoaster.toastperunit + state.get.current().plasmatoaster.efficiency))
              plasmatoasterspeed.cardAnimationInterval()
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
          atomictoasterspeed.cardAnimationInterval()
          tick.mod.set({
            name: "atomictoaster",
            func: function() {
              toast.make(state.get.current().atomictoaster.level * (state.get.current().atomictoaster.toastperunit + state.get.current().atomictoaster.efficiency))
              atomictoasterspeed.cardAnimationInterval()
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
          quantumtoasterspeed.cardAnimationInterval()
          tick.mod.set({
            name: "quantumtoaster",
            func: function() {
              toast.make(state.get.current().quantumtoaster.level * (state.get.current().quantumtoaster.toastperunit + state.get.current().quantumtoaster.efficiency))
              quantumtoasterspeed.cardAnimationInterval()
            },
            interval: function() {
              return state.get.current().quantumtoasterspeed.interval.current
            }
          })
        }
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

  render.report = function(strings) {
    report.render({
      type: "system",
      message: strings,
      format: "normal"
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
