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
        open: ["strategy.auto_toaster.data loaded"]
      },
      megatoaster: {
        open: ["strategy.mega_toaster.data loaded"]
      },
      rockettoaster: {
        open: ["strategy.rocket_toaster.data loaded"]
      },
      atomictoaster: {
        open: ["strategy.atomic_toaster.data loaded"]
      },
      quantumtoaster: {
        open: ["strategy.quantum_toaster.data loaded"]
      },
      unmotivated: {
        open: ["strategy.unmotivated.data loaded"]
      }
    }
  }

  mod.all = {
    processor: {
      condition: function() {
        return state.get.current().toast.inventory.current >= state.get.current().processor.cost.toast
      },
      stage: "processor",
      report: mod.strings.processor.open
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
          state.get.current().events.all.cycle[2].passed = false
        }
      },
      stop: {
        condition: function() {
          return state.get.current().cycle.current == state.get.current().cycle.max
        },
        func: function() {
          tick.mod.remove("cycle")
          state.get.current().events.all.cycle[1].passed = false
        }
      }
    },
    strategy: {
      open: {
        condition: function() {
          return state.get.current().processor.level >= 4
        },
        stage: "strategy",
        report: mod.strings.strategy.open
      },
      autotoaster: {
        condition: function() {
          return state.get.current().processor.level >= 6
        },
        report: mod.strings.strategy.autotoaster.open,
        func: function() {
          strategy.render.add("autotoaster")
        }
      },
      megatoaster: {
        condition: function() {
          return state.get.current().processor.level >= 12
        },
        report: mod.strings.strategy.megatoaster.open,
        func: function() {
          strategy.render.add("megatoaster")
        }
      },
      rockettoaster: {
        condition: function() {
          return state.get.current().processor.level >= 18
        },
        report: mod.strings.strategy.rockettoaster.open,
        func: function() {
          strategy.render.add("rockettoaster")
        }
      },
      atomictoaster: {
        condition: function() {
          return state.get.current().processor.level >= 24
        },
        report: mod.strings.strategy.atomictoaster.open,
        func: function() {
          strategy.render.add("atomictoaster")
        }
      },
      quantumtoaster: {
        condition: function() {
          return state.get.current().processor.level >= 30
        },
        report: mod.strings.strategy.quantumtoaster.open,
        func: function() {
          strategy.render.add("quantumtoaster")
        }
      },
      unmotivated: {
        condition: function() {
          return state.get.current().processor.level >= 10
        },
        report: mod.strings.strategy.unmotivated.open,
        func: function() {
          strategy.render.add("unmotivated")
        }
      }
    },
    autotoaster: {
      open: {
        condition: function() {
          return state.get.current().strategy.autotoaster.active
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
          return state.get.current().strategy.megatoaster.active
        },
        stage: "megatoaster"
      },
      active: {
        condition: function() {
          return state.get.current().megatoaster.level >= 5
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
          return state.get.current().strategy.rockettoaster.active
        },
        stage: "rockettoaster"
      },
      active: {
        condition: function() {
          return state.get.current().rockettoaster.level >= 5
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
    atomictoaster: {
      open: {
        condition: function() {
          return state.get.current().strategy.atomictoaster.active
        },
        stage: "atomictoaster"
      },
      active: {
        condition: function() {
          return state.get.current().atomictoaster.level >= 5
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
          return state.get.current().strategy.quantumtoaster.active
        },
        stage: "quantumtoaster"
      },
      active: {
        condition: function() {
          return state.get.current().quantumtoaster.level >= 5
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
    },
    unmotivated: {
      open: {
        condition: function() {
          return state.get.current().strategy.unmotivated.active
        },
        stage: "unmotivated"
      },
    }
  }

  mod.check = function() {
    // loop over all events in state
    for (var key in state.get.current().events.all) {
      state.get.current().events.all[key].forEach(function(item, index) {

        // if event is not passed
        if (!item.passed) {
          // get event data
          var eventData = helper.getObject({
            object: mod.all,
            path: item.path
          })

          // check if event condition has been met
          if (eventData.condition()) {
            // set event to passed so event will not be evaluated again
            state.get.current().events.all[key][index].passed = true

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

      })
    }
  }

  mod.update = function() {
    // loop over all events in state
    for (var key in state.get.current().events.all) {
      state.get.current().events.all[key].forEach(function(item, index) {

        // if event is not passed and should be restored
        if (item.passed && item.restore) {
          // get event data
          var eventData = helper.getObject({
            object: mod.all,
            path: item.path
          })

          // run event data
          if (eventData.stage) {
            render.unlock(eventData.stage)
          }
          if (eventData.func) {
            eventData.func()
          }
        }

      })
    }
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
