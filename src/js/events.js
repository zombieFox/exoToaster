var events = (function() {

  var mod = {}

  mod.background = function() {
    var all = [{
      func: function() {
        tick.mod.set({
          name: "background",
          func: function() {
            mod.check()
            upgrade.mod.check()
            data.save()
          },
          interval: state.get.current().background.interval
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
    "all.strategy.motivation.open",
    "all.strategy.motivation.active",
    "all.strategy.electromagnetic.open",
    "all.strategy.electromagnetic.active",
    "all.strategy.sonic.open",
    "all.strategy.sonic.active",
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
    "all.electromagnetic.open",
    "all.sonic.open",
    "all.motivation.open"
  ]

  mod.all = {
    consumer: {
      start: {
        condition: function() {
          return state.get.current().toast.lifetime.current >= state.get.current().events.all.consumer.start.condition.toast
        },
        stage: "consumer",
        report: string.mod.consumer.start,
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
        report: string.mod.processor.open
      }
    },
    cycle: {
      open: {
        condition: function() {
          return state.get.current().processor.level > 2
        },
        stage: "cycle",
        report: string.mod.cycle.open
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
        report: string.mod.strategy.open
      },
      autotoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.autotoaster.open.condition.processor
          },
          report: string.mod.strategy.autotoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.autotoaster",
              unit: "autotoaster",
              name: string.mod.name.autotoaster,
              description: string.mod.strategy.autotoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.autotoaster.active.level > 0
          },
          report: string.mod.strategy.autotoaster.active
        }
      },
      megatoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.megatoaster.open.condition.processor
          },
          report: string.mod.strategy.megatoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.megatoaster",
              unit: "megatoaster",
              name: string.mod.name.megatoaster,
              description: string.mod.strategy.megatoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.megatoaster.active.level > 0
          },
          report: string.mod.strategy.megatoaster.active
        }
      },
      rockettoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.rockettoaster.open.condition.processor
          },
          report: string.mod.strategy.rockettoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.rockettoaster",
              unit: "rockettoaster",
              name: string.mod.name.rockettoaster,
              description: string.mod.strategy.rockettoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.rockettoaster.active.level > 0
          },
          report: string.mod.strategy.rockettoaster.active
        }
      },
      sonictoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.sonictoaster.open.condition.processor
          },
          report: string.mod.strategy.sonictoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.sonictoaster",
              unit: "sonictoaster",
              name: string.mod.name.sonictoaster,
              description: string.mod.strategy.sonictoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.sonictoaster.active.level > 0
          },
          report: string.mod.strategy.sonictoaster.active
        }
      },
      plasmatoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.plasmatoaster.open.condition.processor
          },
          report: string.mod.strategy.plasmatoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.plasmatoaster",
              unit: "plasmatoaster",
              name: string.mod.name.plasmatoaster,
              description: string.mod.strategy.plasmatoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.plasmatoaster.active.level > 0
          },
          report: string.mod.strategy.plasmatoaster.active
        }
      },
      atomictoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.atomictoaster.open.condition.processor
          },
          report: string.mod.strategy.atomictoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.atomictoaster",
              unit: "atomictoaster",
              name: string.mod.name.atomictoaster,
              description: string.mod.strategy.atomictoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.atomictoaster.active.level > 0
          },
          report: string.mod.strategy.atomictoaster.active
        }
      },
      quantumtoaster: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.quantumtoaster.open.condition.processor
          },
          report: string.mod.strategy.quantumtoaster.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.quantumtoaster",
              unit: "quantumtoaster",
              name: string.mod.name.quantumtoaster,
              description: string.mod.strategy.quantumtoaster.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.quantumtoaster.active.level > 0
          },
          report: string.mod.strategy.quantumtoaster.active
        }
      },
      motivation: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.motivation.open.condition.processor
          },
          report: string.mod.strategy.motivation.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.motivation",
              unit: "motivation",
              name: string.mod.name.motivation,
              description: string.mod.strategy.motivation.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.motivation.active.level > 0
          },
          report: string.mod.strategy.motivation.active
        }
      },
      electromagnetic: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.electromagnetic.open.condition.processor && state.get.current().toast.lifetime.current >= state.get.current().events.all.consumer.start.condition.toast
          },
          report: string.mod.strategy.electromagnetic.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.electromagnetic",
              unit: "electromagnetic",
              name: string.mod.name.electromagnetic,
              description: string.mod.strategy.electromagnetic.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.electromagnetic.active.level > 0
          },
          report: string.mod.strategy.electromagnetic.active,
          func: function() {
            strategy.render.card({
              path: "all.strategy.electromagnetic",
              unit: "electromagnetic",
              name: string.mod.name.electromagnetic
            })
          }
        }
      },
      sonic: {
        open: {
          condition: function() {
            return state.get.current().processor.level >= state.get.current().events.all.strategy.sonic.open.condition.processor && state.get.current().toast.lifetime.current >= state.get.current().events.all.consumer.start.condition.toast
          },
          report: string.mod.strategy.sonic.open,
          func: function() {
            strategy.render.card({
              path: "all.strategy.sonic",
              unit: "sonic",
              name: string.mod.name.sonic,
              description: string.mod.strategy.sonic.description
            })
          }
        },
        active: {
          condition: function() {
            return state.get.current().events.all.strategy.sonic.active.level > 0
          },
          report: string.mod.strategy.sonic.active,
          func: function() {
            strategy.render.card({
              path: "all.strategy.sonic",
              unit: "sonic",
              name: string.mod.name.sonic
            })
          }
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
          autotoaster.render.interval()
          tick.mod.set({
            name: "autotoaster",
            func: function() {
              toast.make(state.get.current().autotoaster.output.total)
              autotoaster.render.interval()
            },
            interval: function() {
              return state.get.current().autotoaster.interval
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
          megatoaster.render.interval()
          tick.mod.set({
            name: "megatoaster",
            func: function() {
              toast.make(state.get.current().megatoaster.output.total)
              megatoaster.render.interval()
            },
            interval: function() {
              return state.get.current().megatoaster.interval
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
          rockettoaster.render.interval()
          tick.mod.set({
            name: "rockettoaster",
            func: function() {
              toast.make(state.get.current().rockettoaster.output.total)
              rockettoaster.render.interval()
            },
            interval: function() {
              return state.get.current().rockettoaster.interval
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
          sonictoaster.render.interval()
          tick.mod.set({
            name: "sonictoaster",
            func: function() {
              toast.make(state.get.current().sonictoaster.output.total)
              sonictoaster.render.interval()
            },
            interval: function() {
              return state.get.current().sonictoaster.interval
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
          plasmatoaster.render.interval()
          tick.mod.set({
            name: "plasmatoaster",
            func: function() {
              toast.make(state.get.current().plasmatoaster.output.total)
              plasmatoaster.render.interval()
            },
            interval: function() {
              return state.get.current().plasmatoaster.interval
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
          atomictoaster.render.interval()
          tick.mod.set({
            name: "atomictoaster",
            func: function() {
              toast.make(state.get.current().atomictoaster.output.total)
              atomictoaster.render.interval()
            },
            interval: function() {
              return state.get.current().atomictoaster.interval
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
          quantumtoaster.render.interval()
          tick.mod.set({
            name: "quantumtoaster",
            func: function() {
              toast.make(state.get.current().quantumtoaster.output.total)
              quantumtoaster.render.interval()
            },
            interval: function() {
              return state.get.current().quantumtoaster.interval
            }
          })
        }
      }
    },
    motivation: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.motivation.active.level >= 1
        },
        stage: "motivation"
      }
    },
    electromagnetic: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.electromagnetic.active.level >= 1
        },
        stage: "electromagnetic"
      }
    },
    sonic: {
      open: {
        condition: function() {
          return state.get.current().events.all.strategy.sonic.active.level >= 1
        },
        stage: "sonic"
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
