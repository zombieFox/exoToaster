var readout = (function() {

  var mod = {}

  mod.all = {
    toast: [{
      element: "[readout=toast-inventory-current]",
      value: function() {
        return state.get.current().toast.inventory.current
      },
      suffix: true
    }, {
      element: "[readout=consumer-current]",
      value: function() {
        return state.get.current().consumer.current
      },
      suffix: true
    }, {
      element: "[readout=toast-lifetime-current]",
      value: function() {
        return state.get.current().toast.lifetime.current
      }
    }, {
      element: "[readout=toast-automatic-toast-per-sec]",
      value: function() {
        return autotoaster.getToastPerSec() + megatoaster.getToastPerSec() + rockettoaster.getToastPerSec() + sonictoaster.getToastPerSec() + plasmatoaster.getToastPerSec() + atomictoaster.getToastPerSec() + quantumtoaster.getToastPerSec()
      }
    }],
    processor: [{
      element: "[readout=processor-level]",
      value: function() {
        return state.get.current().processor.level
      },
      suffix: true
    }, {
      element: "[readout=processor-cost-toast]",
      value: function() {
        return state.get.current().processor.cost.toast
      },
      suffix: true
    }],
    cycle: [{
      element: "[readout=cycle-current]",
      value: function() {
        return state.get.current().cycle.current
      },
      suffix: true
    }, {
      element: "[readout=cycle-max]",
      value: function() {
        return state.get.current().cycle.max
      },
      suffix: true
    }, {
      element: "[readout=cycle-speed]",
      value: function() {
        return state.get.current().cycle.interval.current / 1000
      }
    }, {
      element: "[readout=cycle-maxmultiplier]",
      value: function() {
        return state.get.current().cycle.maxmultiplier
      }
    }],
    autotoaster: [{
      element: "[readout=autotoaster-totaltoastoutput]",
      value: function() {
        return autotoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-toastperunit]",
      value: function() {
        return autotoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=autotoasterspeed-interval-current]",
      value: function() {
        return state.get.current().autotoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=autotoaster-level]",
      value: function() {
        return state.get.current().autotoaster.level
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-cost-toast]",
      value: function() {
        return state.get.current().autotoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=autotoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().autotoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=autotoasterspeed-level]",
      value: function() {
        return state.get.current().autotoasterspeed.level
      },
      suffix: true
    }],
    megatoaster: [{
      element: "[readout=megatoaster-totaltoastoutput]",
      value: function() {
        return megatoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-toastperunit]",
      value: function() {
        return megatoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=megatoasterspeed-interval-current]",
      value: function() {
        return state.get.current().megatoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=megatoaster-level]",
      value: function() {
        return state.get.current().megatoaster.level
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-cost-toast]",
      value: function() {
        return state.get.current().megatoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=megatoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().megatoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=megatoasterspeed-level]",
      value: function() {
        return state.get.current().megatoasterspeed.level
      },
      suffix: true
    }],
    rockettoaster: [{
      element: "[readout=rockettoaster-totaltoastoutput]",
      value: function() {
        return rockettoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=rockettoaster-toastperunit]",
      value: function() {
        return rockettoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=rockettoasterspeed-interval-current]",
      value: function() {
        return state.get.current().rockettoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=rockettoaster-level]",
      value: function() {
        return state.get.current().rockettoaster.level
      },
      suffix: true
    }, {
      element: "[readout=rockettoaster-cost-toast]",
      value: function() {
        return state.get.current().rockettoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=rockettoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().rockettoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=rockettoasterspeed-level]",
      value: function() {
        return state.get.current().rockettoasterspeed.level
      },
      suffix: true
    }],
    sonictoaster: [{
      element: "[readout=sonictoaster-totaltoastoutput]",
      value: function() {
        return sonictoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=sonictoaster-toastperunit]",
      value: function() {
        return sonictoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=sonictoasterspeed-interval-current]",
      value: function() {
        return state.get.current().sonictoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=sonictoaster-level]",
      value: function() {
        return state.get.current().sonictoaster.level
      },
      suffix: true
    }, {
      element: "[readout=sonictoaster-cost-toast]",
      value: function() {
        return state.get.current().sonictoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=sonictoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().sonictoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=sonictoasterspeed-level]",
      value: function() {
        return state.get.current().sonictoasterspeed.level
      },
      suffix: true
    }],
    plasmatoaster: [{
      element: "[readout=plasmatoaster-totaltoastoutput]",
      value: function() {
        return plasmatoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=plasmatoaster-toastperunit]",
      value: function() {
        return plasmatoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=plasmatoasterspeed-interval-current]",
      value: function() {
        return state.get.current().plasmatoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=plasmatoaster-level]",
      value: function() {
        return state.get.current().plasmatoaster.level
      },
      suffix: true
    }, {
      element: "[readout=plasmatoaster-cost-toast]",
      value: function() {
        return state.get.current().plasmatoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=plasmatoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().plasmatoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=plasmatoasterspeed-level]",
      value: function() {
        return state.get.current().plasmatoasterspeed.level
      },
      suffix: true
    }],
    atomictoaster: [{
      element: "[readout=atomictoaster-totaltoastoutput]",
      value: function() {
        return atomictoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=atomictoaster-toastperunit]",
      value: function() {
        return atomictoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=atomictoasterspeed-interval-current]",
      value: function() {
        return state.get.current().atomictoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=atomictoaster-level]",
      value: function() {
        return state.get.current().atomictoaster.level
      },
      suffix: true
    }, {
      element: "[readout=atomictoaster-cost-toast]",
      value: function() {
        return state.get.current().atomictoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=atomictoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().atomictoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=atomictoasterspeed-level]",
      value: function() {
        return state.get.current().atomictoasterspeed.level
      },
      suffix: true
    }],
    quantumtoaster: [{
      element: "[readout=quantumtoaster-totaltoastoutput]",
      value: function() {
        return quantumtoaster.getTotalOutput()
      },
      suffix: true
    }, {
      element: "[readout=quantumtoaster-toastperunit]",
      value: function() {
        return quantumtoaster.getToastperunit()
      },
      suffix: true
    }, {
      element: "[readout=quantumtoasterspeed-interval-current]",
      value: function() {
        return state.get.current().quantumtoasterspeed.interval.current / 1000
      }
    }, {
      element: "[readout=quantumtoaster-level]",
      value: function() {
        return state.get.current().quantumtoaster.level
      },
      suffix: true
    }, {
      element: "[readout=quantumtoaster-cost-toast]",
      value: function() {
        return state.get.current().quantumtoaster.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=quantumtoasterspeed-cost-toast]",
      value: function() {
        return state.get.current().quantumtoasterspeed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=quantumtoasterspeed-level]",
      value: function() {
        return state.get.current().quantumtoasterspeed.level
      },
      suffix: true
    }],
    strategy: [{
      element: "[readout=strategy-next]",
      value: function() {
        return state.get.current().strategy.next
      },
      suffix: true
    }]
  }

  var render = {}

  render.all = function() {
    for (var key in mod.all) {
      mod.all[key].forEach(function(item, index) {
        var content = item.value()

        if (content != undefined) {
          if (item.suffix && typeof content == "number") {
            content = suffix.add({
              number: content,
              abbreviations: true
            })
          } else {
            content = content.toLocaleString(2)
          }

          helper.eA(item.element).forEach(function(item, index) {
            item.textContent = content
          })
        }

      })
    }
  }

  return {
    mod: mod,
    render: render
  }

})()
