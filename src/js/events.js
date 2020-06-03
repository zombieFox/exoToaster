var events = (function() {

  var mod = {}

  mod.background = function() {
    var all = [{
      func: function() {
        tick.mod.set({
          name: "background",
          func: function() {
            mod.check()
            strategy.next()
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

  mod.action = {
    toast: {
      toastpersec: [{
        func: function() {
          render.unlock("toast-per-second")
        },
        report: function() {
          report.render.message(string.mod.toast.toastpersec)
        }
      }]
    },
    processor: {
      open: [{
        func: function() {
          render.unlock("processor")
        },
        report: function() {
          report.render.message(string.mod.processor.open)
        }
      }]
    },
    consumer: {
      open: [{
        func: function() {
          render.unlock("consumer")
          tick.mod.set({
            name: "consumer",
            func: function() {
              consumer.mod.add()
            },
            interval: function() {
              return consumer.mod.interval()
            }
          })
        },
        report: function() {
          report.render.message(string.mod.consumer.open)
        }
      }]
    },
    cycle: {
      open: [{
        func: function() {
          render.unlock("cycle")
        },
        report: function() {
          report.render.message(string.mod.cycle.open)
        }
      }],
      start: [{
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
          state.get.current().event.cycle.stop[0].passed = false
        }
      }],
      stop: [{
        func: function() {
          tick.mod.remove("cycle")
          state.get.current().event.cycle.start[0].passed = false
        }
      }],
      level1: [{
        func: function() {
          upgrade.render.card({
            stage: "cycle",
            path: "upgrade.cycle.level1",
            name: string.mod.upgrade.cycle.level.name,
            description: string.mod.upgrade.cycle.level.description,
            action: function() {
              cycle.mod.level.add(1)
              cycle.max()
            }
          })
        }
      }],
      level2: [{
        func: function() {
          upgrade.render.card({
            stage: "cycle",
            path: "upgrade.cycle.level2",
            name: string.mod.upgrade.cycle.level.name,
            description: string.mod.upgrade.cycle.level.description,
            action: function() {
              cycle.mod.level.add(1)
              cycle.max()
            }
          })
        }
      }]
    },
    electromagnetic: {
      open: [{
        func: function() {
          render.unlock("electromagnetic")
        },
        report: function() {
          report.render.message(string.mod.electromagnetic.open)
        }
      }]
    },
    motivation: {
      open: [{
        func: function() {
          render.unlock("motivation")
        },
        report: function() {
          report.render.message(string.mod.motivation.open)
        }
      }],
      level1: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.level1",
            name: string.mod.upgrade.motivation.level.name,
            description: string.mod.upgrade.motivation.level.description,
            action: function() {
              motivation.mod.level.add(1)
            }
          })
        }
      }],
      level2: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.level2",
            name: string.mod.upgrade.motivation.level.name,
            description: string.mod.upgrade.motivation.level.description,
            action: function() {
              motivation.mod.level.add(1)
            }
          })
        }
      }],
      level3: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.level3",
            name: string.mod.upgrade.motivation.level.name,
            description: string.mod.upgrade.motivation.level.description,
            action: function() {
              motivation.mod.level.add(1)
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.speed1",
            name: string.mod.upgrade.motivation.speed.name,
            description: string.mod.upgrade.motivation.speed.description,
            action: function() {
              motivation.mod.speed.add(1)
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.speed2",
            name: string.mod.upgrade.motivation.speed.name,
            description: string.mod.upgrade.motivation.speed.description,
            action: function() {
              motivation.mod.speed.add(1)
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.speed3",
            name: string.mod.upgrade.motivation.speed.name,
            description: string.mod.upgrade.motivation.speed.description,
            action: function() {
              motivation.mod.speed.add(1)
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.speed4",
            name: string.mod.upgrade.motivation.speed.name,
            description: string.mod.upgrade.motivation.speed.description,
            action: function() {
              motivation.mod.speed.add(1)
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.speed5",
            name: string.mod.upgrade.motivation.speed.name,
            description: string.mod.upgrade.motivation.speed.description,
            action: function() {
              motivation.mod.speed.add(1)
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "motivation",
            path: "upgrade.motivation.speed6",
            name: string.mod.upgrade.motivation.speed.name,
            description: string.mod.upgrade.motivation.speed.description,
            action: function() {
              motivation.mod.speed.add(1)
            }
          })
        }
      }]
    },
    autotoaster: {
      open: [{
        func: function() {
          render.unlock("autotoaster")
        },
        report: function() {
          report.render.message(string.mod.autotoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.efficiency1",
            name: string.mod.upgrade.autotoaster.efficiency.name,
            description: string.mod.upgrade.autotoaster.efficiency.description,
            action: function() {
              autotoaster.efficiency.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.efficiency2",
            name: string.mod.upgrade.autotoaster.efficiency.name,
            description: string.mod.upgrade.autotoaster.efficiency.description,
            action: function() {
              autotoaster.efficiency.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.efficiency3",
            name: string.mod.upgrade.autotoaster.efficiency.name,
            description: string.mod.upgrade.autotoaster.efficiency.description,
            action: function() {
              autotoaster.efficiency.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.efficiency4",
            name: string.mod.upgrade.autotoaster.efficiency.name,
            description: string.mod.upgrade.autotoaster.efficiency.description,
            action: function() {
              autotoaster.efficiency.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed1",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed2",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed3",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed4",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed5",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed6",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "autotoaster",
            path: "upgrade.autotoaster.speed7",
            name: string.mod.upgrade.autotoaster.speed.name,
            description: string.mod.upgrade.autotoaster.speed.description,
            action: function() {
              autotoaster.speed.add(1)
              autotoaster.set.output()
            }
          })
        }
      }, {
        func: function() {
          autotoaster.speed.add(1)
          autotoaster.set.output()
        }
      }]
    },
    megatoaster: {
      open: [{
        func: function() {
          render.unlock("megatoaster")
        },
        report: function() {
          report.render.message(string.mod.megatoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.efficiency1",
            name: string.mod.upgrade.megatoaster.efficiency.name,
            description: string.mod.upgrade.megatoaster.efficiency.description,
            action: function() {
              megatoaster.efficiency.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.efficiency2",
            name: string.mod.upgrade.megatoaster.efficiency.name,
            description: string.mod.upgrade.megatoaster.efficiency.description,
            action: function() {
              megatoaster.efficiency.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.efficiency3",
            name: string.mod.upgrade.megatoaster.efficiency.name,
            description: string.mod.upgrade.megatoaster.efficiency.description,
            action: function() {
              megatoaster.efficiency.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.efficiency4",
            name: string.mod.upgrade.megatoaster.efficiency.name,
            description: string.mod.upgrade.megatoaster.efficiency.description,
            action: function() {
              megatoaster.efficiency.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed1",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed2",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed3",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed4",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed5",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed6",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "megatoaster",
            path: "upgrade.megatoaster.speed7",
            name: string.mod.upgrade.megatoaster.speed.name,
            description: string.mod.upgrade.megatoaster.speed.description,
            action: function() {
              megatoaster.speed.add(1)
              megatoaster.set.output()
            }
          })
        }
      }, {
        func: function() {
          megatoaster.speed.add(1)
          megatoaster.set.output()
        }
      }]
    },
    rockettoaster: {
      open: [{
        func: function() {
          render.unlock("rockettoaster")
        },
        report: function() {
          report.render.message(string.mod.rockettoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.efficiency1",
            name: string.mod.upgrade.rockettoaster.efficiency.name,
            description: string.mod.upgrade.rockettoaster.efficiency.description,
            action: function() {
              rockettoaster.efficiency.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.efficiency2",
            name: string.mod.upgrade.rockettoaster.efficiency.name,
            description: string.mod.upgrade.rockettoaster.efficiency.description,
            action: function() {
              rockettoaster.efficiency.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.efficiency3",
            name: string.mod.upgrade.rockettoaster.efficiency.name,
            description: string.mod.upgrade.rockettoaster.efficiency.description,
            action: function() {
              rockettoaster.efficiency.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.efficiency4",
            name: string.mod.upgrade.rockettoaster.efficiency.name,
            description: string.mod.upgrade.rockettoaster.efficiency.description,
            action: function() {
              rockettoaster.efficiency.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed1",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed2",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed3",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed4",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed5",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed6",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "rockettoaster",
            path: "upgrade.rockettoaster.speed7",
            name: string.mod.upgrade.rockettoaster.speed.name,
            description: string.mod.upgrade.rockettoaster.speed.description,
            action: function() {
              rockettoaster.speed.add(1)
              rockettoaster.set.output()
            }
          })
        }
      }, {
        func: function() {
          rockettoaster.speed.add(1)
          rockettoaster.set.output()
        }
      }]
    },
    sonictoaster: {
      open: [{
        func: function() {
          render.unlock("sonictoaster")
        },
        report: function() {
          report.render.message(string.mod.sonictoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.efficiency1",
            name: string.mod.upgrade.sonictoaster.efficiency.name,
            description: string.mod.upgrade.sonictoaster.efficiency.description,
            action: function() {
              sonictoaster.efficiency.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.efficiency2",
            name: string.mod.upgrade.sonictoaster.efficiency.name,
            description: string.mod.upgrade.sonictoaster.efficiency.description,
            action: function() {
              sonictoaster.efficiency.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.efficiency3",
            name: string.mod.upgrade.sonictoaster.efficiency.name,
            description: string.mod.upgrade.sonictoaster.efficiency.description,
            action: function() {
              sonictoaster.efficiency.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.efficiency4",
            name: string.mod.upgrade.sonictoaster.efficiency.name,
            description: string.mod.upgrade.sonictoaster.efficiency.description,
            action: function() {
              sonictoaster.efficiency.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed1",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed2",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed3",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed4",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed5",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed6",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "sonictoaster",
            path: "upgrade.sonictoaster.speed7",
            name: string.mod.upgrade.sonictoaster.speed.name,
            description: string.mod.upgrade.sonictoaster.speed.description,
            action: function() {
              sonictoaster.speed.add(1)
              sonictoaster.set.output()
            }
          })
        }
      }, {
        func: function() {
          sonictoaster.speed.add(1)
          sonictoaster.set.output()
        }
      }]
    },
    plasmatoaster: {
      open: [{
        func: function() {
          render.unlock("plasmatoaster")
        },
        report: function() {
          report.render.message(string.mod.plasmatoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.efficiency1",
            name: string.mod.upgrade.plasmatoaster.efficiency.name,
            description: string.mod.upgrade.plasmatoaster.efficiency.description,
            action: function() {
              plasmatoaster.efficiency.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.efficiency2",
            name: string.mod.upgrade.plasmatoaster.efficiency.name,
            description: string.mod.upgrade.plasmatoaster.efficiency.description,
            action: function() {
              plasmatoaster.efficiency.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.efficiency3",
            name: string.mod.upgrade.plasmatoaster.efficiency.name,
            description: string.mod.upgrade.plasmatoaster.efficiency.description,
            action: function() {
              plasmatoaster.efficiency.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.efficiency4",
            name: string.mod.upgrade.plasmatoaster.efficiency.name,
            description: string.mod.upgrade.plasmatoaster.efficiency.description,
            action: function() {
              plasmatoaster.efficiency.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed1",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed2",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed3",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed4",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed5",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed6",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "plasmatoaster",
            path: "upgrade.plasmatoaster.speed7",
            name: string.mod.upgrade.plasmatoaster.speed.name,
            description: string.mod.upgrade.plasmatoaster.speed.description,
            action: function() {
              plasmatoaster.speed.add(1)
              plasmatoaster.set.output()
            }
          })
        }
      }, {
        func: function() {
          plasmatoaster.speed.add(1)
          plasmatoaster.set.output()
        }
      }]
    },
    atomictoaster: {
      open: [{
        func: function() {
          render.unlock("atomictoaster")
        },
        report: function() {
          report.render.message(string.mod.atomictoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.efficiency1",
            name: string.mod.upgrade.atomictoaster.efficiency.name,
            description: string.mod.upgrade.atomictoaster.efficiency.description,
            action: function() {
              atomictoaster.efficiency.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.efficiency2",
            name: string.mod.upgrade.atomictoaster.efficiency.name,
            description: string.mod.upgrade.atomictoaster.efficiency.description,
            action: function() {
              atomictoaster.efficiency.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.efficiency3",
            name: string.mod.upgrade.atomictoaster.efficiency.name,
            description: string.mod.upgrade.atomictoaster.efficiency.description,
            action: function() {
              atomictoaster.efficiency.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.efficiency4",
            name: string.mod.upgrade.atomictoaster.efficiency.name,
            description: string.mod.upgrade.atomictoaster.efficiency.description,
            action: function() {
              atomictoaster.efficiency.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed1",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed2",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed3",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed4",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed5",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed6",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "atomictoaster",
            path: "upgrade.atomictoaster.speed7",
            name: string.mod.upgrade.atomictoaster.speed.name,
            description: string.mod.upgrade.atomictoaster.speed.description,
            action: function() {
              atomictoaster.speed.add(1)
              atomictoaster.set.output()
            }
          })
        }
      }]
    },
    quantumtoaster: {
      open: [{
        func: function() {
          render.unlock("quantumtoaster")
        },
        report: function() {
          report.render.message(string.mod.quantumtoaster.open)
        }
      }],
      start: [{
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
      }],
      efficiency1: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.efficiency1",
            name: string.mod.upgrade.quantumtoaster.efficiency.name,
            description: string.mod.upgrade.quantumtoaster.efficiency.description,
            action: function() {
              quantumtoaster.efficiency.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      efficiency2: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.efficiency2",
            name: string.mod.upgrade.quantumtoaster.efficiency.name,
            description: string.mod.upgrade.quantumtoaster.efficiency.description,
            action: function() {
              quantumtoaster.efficiency.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      efficiency3: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.efficiency3",
            name: string.mod.upgrade.quantumtoaster.efficiency.name,
            description: string.mod.upgrade.quantumtoaster.efficiency.description,
            action: function() {
              quantumtoaster.efficiency.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      efficiency4: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.efficiency4",
            name: string.mod.upgrade.quantumtoaster.efficiency.name,
            description: string.mod.upgrade.quantumtoaster.efficiency.description,
            action: function() {
              quantumtoaster.efficiency.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed1: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed1",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed2: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed2",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed3: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed3",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed4: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed4",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed5: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed5",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed6: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed6",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }],
      speed7: [{
        func: function() {
          upgrade.render.card({
            stage: "quantumtoaster",
            path: "upgrade.quantumtoaster.speed7",
            name: string.mod.upgrade.quantumtoaster.speed.name,
            description: string.mod.upgrade.quantumtoaster.speed.description,
            action: function() {
              quantumtoaster.speed.add(1)
              quantumtoaster.set.output()
            }
          })
        }
      }, {
        func: function() {
          quantumtoaster.speed.add(1)
          quantumtoaster.set.output()
        }
      }]
    },
    strategy: {
      open: [{
        func: function() {
          render.unlock("strategy")
        },
        report: function() {
          report.render.message(string.mod.strategy.open)
        }
      }],
      electromagnetic: [{
        func: function() {
          strategy.render.card({
            path: "strategy.electromagnetic",
            name: string.mod.name.electromagnetic,
            description: string.mod.strategy.electromagnetic.description
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.electromagnetic.open)
        }
      }],
      toastpersec: [{
        func: function() {
          strategy.render.card({
            path: "strategy.toastpersec",
            name: string.mod.name.toastpersec,
            description: string.mod.strategy.toastpersec.description
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.toastpersec.open)
        }
      }],
      motivation: [{
        func: function() {
          strategy.render.card({
            path: "strategy.motivation",
            name: string.mod.name.motivation,
            description: string.mod.strategy.motivation.description
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.motivation.open)
        }
      }],
      autotoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.autotoaster",
            name: string.mod.name.autotoaster,
            description: string.mod.strategy.autotoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.autotoaster.open)
        }
      }],
      megatoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.megatoaster",
            name: string.mod.name.megatoaster,
            description: string.mod.strategy.megatoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.megatoaster.open)
        }
      }],
      rockettoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.rockettoaster",
            name: string.mod.name.rockettoaster,
            description: string.mod.strategy.rockettoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.rockettoaster.open)
        }
      }],
      sonictoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.sonictoaster",
            name: string.mod.name.sonictoaster,
            description: string.mod.strategy.sonictoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.sonictoaster.open)
        }
      }],
      plasmatoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.plasmatoaster",
            name: string.mod.name.plasmatoaster,
            description: string.mod.strategy.plasmatoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.plasmatoaster.open)
        }
      }],
      atomictoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.atomictoaster",
            name: string.mod.name.atomictoaster,
            description: string.mod.strategy.atomictoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.atomictoaster.open)
        }
      }],
      quantumtoaster: [{
        func: function() {
          strategy.render.card({
            path: "strategy.quantumtoaster",
            name: string.mod.name.quantumtoaster,
            description: string.mod.strategy.quantumtoaster.description,
          })
        },
        report: function() {
          report.render.message(string.mod.strategy.quantumtoaster.open)
        }
      }]
    }
  }

  mod.validateCondition = function functionName(eventData) {

    var passCondition = []

    eventData.condition.forEach(function(condition, index) {
      switch (condition.operator) {
        case ">":
          passCondition.push(helper.getObject({
            object: state.get.current(),
            path: condition.check
          }) > condition.value)
          break

        case ">=":
          passCondition.push(helper.getObject({
            object: state.get.current(),
            path: condition.check
          }) >= condition.value)
          break

        case "==":
          passCondition.push(helper.getObject({
            object: state.get.current(),
            path: condition.check
          }) == condition.value)
          break

        case "<":
          passCondition.push(helper.getObject({
            object: state.get.current(),
            path: condition.check
          }) < condition.value)
          break

        case "<=":
          passCondition.push(helper.getObject({
            object: state.get.current(),
            path: condition.check
          }) <= condition.value)
          break

        case "!=":
          passCondition.push(helper.getObject({
            object: state.get.current(),
            path: condition.check
          }) != condition.value)
          break
      }
    })

    if (eventData.anyCondition) {
      return passCondition.includes(true)
    } else {
      return !passCondition.includes(false)
    }
  }

  mod.check = function() {
    for (var unit in state.get.current().event) {
      for (var stat in state.get.current().event[unit]) {
        state.get.current().event[unit][stat].forEach(function(event, index) {

          var eventData = state.get.current().event[unit][stat][index]

          // console.log(unit, stat, index, eventData);
          if (mod.validateCondition(eventData) && !eventData.passed) {

            eventData.passed = true

            if (unit in mod.action) {
              if (stat in mod.action[unit]) {
                if ("func" in mod.action[unit][stat][index]) {
                  mod.action[unit][stat][index].func()
                }
                if ("report" in mod.action[unit][stat][index]) {
                  mod.action[unit][stat][index].report()
                }
              }
            }
          }

        })
      }
    }
  }

  mod.restore = function() {
    for (var unit in state.get.current().event) {
      for (var stat in state.get.current().event[unit]) {
        state.get.current().event[unit][stat].forEach(function(event, index) {

          var eventData = state.get.current().event[unit][stat][index]

          if (eventData.passed) {
            if (unit in mod.action) {
              if (stat in mod.action[unit]) {
                if ("func" in mod.action[unit][stat][index]) {
                  mod.action[unit][stat][index].func()
                }
              }
            }
          }

        })
      }
    }
  }

  var render = {}

  render.unlock = function(stageName) {
    helper.e("[stage=" + stageName + "]").classList.remove("is-hidden")
  }

  render.lock = function(stageName) {
    helper.e("[stage=" + stageName + "]").classList.add("is-hidden")
  }

  var init = function() {
    mod.background()
    mod.restore()
  }

  return {
    mod: mod,
    init: init
  }

})()
