var events = (function() {

  var mod = {}

  mod.strings = {
    processor: {
      unlock: "processor discovered"
    },
    cycle: {
      unlock: "cycle discovered"
    }
  }

  mod.all = {
    background: [{
      name: "events",
      condition: function() {
        return true
      },
      func: function() {
        tick.mod.set({
          name: this.name,
          func: function() {
            mod.check()
          },
          interval: state.get.current().events.interval
        })
      },
      passed: false
    }, {
      name: "autosave",
      condition: function() {
        return true
      },
      func: function() {
        tick.mod.set({
          name: this.name,
          func: function() {
            data.save()
          },
          interval: state.get.current().autosave.interval
        })
      },
      passed: false
    }, {
      name: "readout",
      condition: function() {
        return true
      },
      func: function() {
        tick.mod.set({
          name: this.name,
          func: function() {
            readout.render.all()
          },
          interval: state.get.current().readout.interval
        })
      },
      passed: false
    }],
    processor: [{
      condition: function() {
        return state.get.current().toast.inventory.current >= state.get.current().processor.cost.toast
      },
      func: function() {
        helper.e("[stage=processor]").classList.remove("is-hidden")
        render(mod.strings.processor.unlock)
      },
      passed: false
    }],
    cycle: [{
      name: "cycle",
      condition: function() {
        return state.get.current().processor.level > 2
      },
      func: function() {
        helper.e("[stage=cycle]").classList.remove("is-hidden")
        helper.e("[stage=cycle]").classList.add("active")
        tick.mod.set({
          name: this.name,
          func: function() {
            cycle.mod.add(1)
            cycle.mod.interval.animation()
          },
          interval: function() {
            return state.get.current().cycle.interval.current
          }
        })
        render(mod.strings.cycle.unlock)
      },
      passed: false
    }],
    strategy: [{
      condition: function() {
        return state.get.current().processor.level >= 4
      },
      func: function() {
        helper.e("[stage=strategy]").classList.remove("is-hidden")
        report.render({
          type: "system",
          message: ["strategy discovered"],
          format: "normal"
        })
      },
      passed: false
    }, {
      condition: function() {
        return state.get.current().processor.level >= 5 && !state.get.current().strategy.autotoaster.active
      },
      func: function() {
        strategy.render.add("autotoaster")
      },
      passed: false
    }, {
      condition: function() {
        return state.get.current().processor.level >= 10 && !state.get.current().strategy.megatoaster.active
      },
      func: function() {
        strategy.render.add("megatoaster")
      },
      passed: false
    }, {
      condition: function() {
        return state.get.current().processor.level >= 15 && !state.get.current().strategy.rockettoaster.active
      },
      func: function() {
        strategy.render.add("rockettoaster")
      },
      passed: false
    }, {
      condition: function() {
        return state.get.current().processor.level >= 20 && !state.get.current().strategy.atomictoaster.active
      },
      func: function() {
        strategy.render.add("atomictoaster")
      },
      passed: false
    }, {
      condition: function() {
        return state.get.current().processor.level >= 25 && !state.get.current().strategy.quantumtoaster.active
      },
      func: function() {
        strategy.render.add("quantumtoaster")
      },
      passed: false
    }],
    autotoaster: [{
      name: "autotoaster",
      condition: function() {
        return state.get.current().strategy.autotoaster.active
      },
      func: function() {
        helper.e("[stage=autotoaster]").classList.remove("is-hidden")
      },
      passed: false
    }, {
      name: "autotoaster",
      condition: function() {
        return state.get.current().autotoaster.level >= 1
      },
      func: function() {
        helper.e("[stage=autotoaster]").classList.add("active")
        tick.mod.set({
          name: this.name,
          func: function() {
            toast.make(state.get.current().autotoaster.level * state.get.current().autotoaster.toastperunit)
            autotoasterspeed.cardAnimationInterval()
          },
          interval: function() {
            return state.get.current().autotoasterspeed.interval.current
          }
        })
      },
      passed: false
    }],
    megatoaster: [{
      name: "megatoaster",
      condition: function() {
        return state.get.current().strategy.megatoaster.active
      },
      func: function() {
        helper.e("[stage=megatoaster]").classList.remove("is-hidden")
      },
      passed: false
    }, {
      name: "megatoaster",
      condition: function() {
        return state.get.current().megatoaster.level >= 1
      },
      func: function() {
        helper.e("[stage=megatoaster]").classList.add("active")
        tick.mod.set({
          name: this.name,
          func: function() {
            toast.make(state.get.current().megatoaster.level * state.get.current().megatoaster.toastperunit)
            megatoasterspeed.cardAnimationInterval()
          },
          interval: function() {
            return state.get.current().megatoasterspeed.interval.current
          }
        })
      },
      passed: false
    }],
    rockettoaster: [{
      name: "rockettoaster",
      condition: function() {
        return state.get.current().strategy.rockettoaster.active
      },
      func: function() {
        helper.e("[stage=rockettoaster]").classList.remove("is-hidden")
      },
      passed: false
    }, {
      name: "rockettoaster",
      condition: function() {
        return state.get.current().rockettoaster.level >= 1
      },
      func: function() {
        helper.e("[stage=rockettoaster]").classList.add("active")
        tick.mod.set({
          name: this.name,
          func: function() {
            toast.make(state.get.current().rockettoaster.level * state.get.current().rockettoaster.toastperunit)
            rockettoasterspeed.cardAnimationInterval()
          },
          interval: function() {
            return state.get.current().rockettoasterspeed.interval.current
          }
        })
      },
      passed: false
    }],
    atomictoaster: [{
      name: "atomictoaster",
      condition: function() {
        return state.get.current().strategy.atomictoaster.active
      },
      func: function() {
        helper.e("[stage=atomictoaster]").classList.remove("is-hidden")
      },
      passed: false
    }, {
      name: "atomictoaster",
      condition: function() {
        return state.get.current().atomictoaster.level >= 1
      },
      func: function() {
        helper.e("[stage=atomictoaster]").classList.add("active")
        tick.mod.set({
          name: this.name,
          func: function() {
            toast.make(state.get.current().atomictoaster.level * state.get.current().atomictoaster.toastperunit)
            atomictoasterspeed.cardAnimationInterval()
          },
          interval: function() {
            return state.get.current().atomictoasterspeed.interval.current
          }
        })
      },
      passed: false
    }],
    quantumtoaster: [{
      name: "quantumtoaster",
      condition: function() {
        return state.get.current().strategy.quantumtoaster.active
      },
      func: function() {
        helper.e("[stage=quantumtoaster]").classList.remove("is-hidden")
      },
      passed: false
    }, {
      name: "quantumtoaster",
      condition: function() {
        return state.get.current().quantumtoaster.level >= 1
      },
      func: function() {
        helper.e("[stage=quantumtoaster]").classList.add("active")
        tick.mod.set({
          name: this.name,
          func: function() {
            toast.make(state.get.current().quantumtoaster.level * state.get.current().quantumtoaster.toastperunit)
            quantumtoasterspeed.cardAnimationInterval()
          },
          interval: function() {
            return state.get.current().quantumtoasterspeed.interval.current
          }
        })
      },
      passed: false
    }]
  }

  mod.check = function() {
    for (var key in mod.all) {
      mod.all[key].forEach(function(item, index) {

        if (!item.passed && item.condition()) {
          item.passed = true
          item.func()
        }

      })
    }
  }

  var render = function(string) {
    report.render({
      type: "system",
      message: [string],
      format: "normal"
    })
  }

  var init = function() {
    mod.check()
  }

  return {
    mod: mod,
    init: init
  }

})()
