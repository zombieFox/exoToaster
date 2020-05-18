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
      element: "[readout=toast-lifetime-current]",
      value: function() {
        return state.get.current().toast.lifetime.current
      }
    }, {
      element: "[readout=toast-automatic-toast-per-sec]",
      value: function() {
        var autotoasterTotalToast = state.get.current().autotoaster.level * (state.get.current().autotoaster.toastperunit + state.get.current().autotoaster.efficiency)
        var autotoasterPerSec = ((state.get.current().autotoasterspeed.interval.starting - (state.get.current().autotoasterspeed.level * 500)) / 1000)

        var megatoasterTotalToast = state.get.current().megatoaster.level * (state.get.current().megatoaster.toastperunit + state.get.current().megatoaster.efficiency)
        var megatoasterPerSec = ((state.get.current().megatoasterspeed.interval.starting - (state.get.current().megatoasterspeed.level * 500)) / 1000)

        var rockettoasterTotalToast = state.get.current().rockettoaster.level * (state.get.current().rockettoaster.toastperunit + state.get.current().rockettoaster.efficiency)
        var rockettoasterPerSec = ((state.get.current().rockettoasterspeed.interval.starting - (state.get.current().rockettoasterspeed.level * 500)) / 1000)

        var sonictoasterTotalToast = state.get.current().sonictoaster.level * (state.get.current().sonictoaster.toastperunit + state.get.current().sonictoaster.efficiency)
        var sonictoasterPerSec = ((state.get.current().sonictoasterspeed.interval.starting - (state.get.current().sonictoasterspeed.level * 500)) / 1000)

        var plasmatoasterTotalToast = state.get.current().plasmatoaster.level * (state.get.current().plasmatoaster.toastperunit + state.get.current().plasmatoaster.efficiency)
        var plasmatoasterPerSec = ((state.get.current().plasmatoasterspeed.interval.starting - (state.get.current().plasmatoasterspeed.level * 500)) / 1000)

        var atomictoasterTotalToast = state.get.current().atomictoaster.level * (state.get.current().atomictoaster.toastperunit + state.get.current().atomictoaster.efficiency)
        var atomictoasterPerSec = ((state.get.current().atomictoasterspeed.interval.starting - (state.get.current().atomictoasterspeed.level * 500)) / 1000)

        var quantumtoasterTotalToast = state.get.current().quantumtoaster.level * (state.get.current().quantumtoaster.toastperunit + state.get.current().quantumtoaster.efficiency)
        var quantumtoasterPerSec = ((state.get.current().quantumtoasterspeed.interval.starting - (state.get.current().quantumtoasterspeed.level * 500)) / 1000)

        var number = (autotoasterTotalToast / autotoasterPerSec) + (megatoasterTotalToast / megatoasterPerSec) + (rockettoasterTotalToast / rockettoasterPerSec) + (sonictoasterTotalToast / sonictoasterPerSec) + (plasmatoasterTotalToast / plasmatoasterPerSec) + (atomictoasterTotalToast / atomictoasterPerSec) + (quantumtoasterTotalToast / quantumtoasterPerSec)

        return number
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
    }],
    autotoaster: [{
      element: "[readout=autotoaster-toast]",
      value: function() {
        var level = state.get.current().autotoaster.level
        var toastperunit = state.get.current().autotoaster.toastperunit
        var efficiency = state.get.current().autotoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-toastperunit]",
      value: function() {
        return state.get.current().autotoaster.toastperunit + state.get.current().autotoaster.efficiency
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
      element: "[readout=megatoaster-toast]",
      value: function() {
        var level = state.get.current().megatoaster.level
        var toastperunit = state.get.current().megatoaster.toastperunit
        var efficiency = state.get.current().megatoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-toastperunit]",
      value: function() {
        return state.get.current().megatoaster.toastperunit + state.get.current().megatoaster.efficiency
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
      element: "[readout=rockettoaster-toast]",
      value: function() {
        var level = state.get.current().rockettoaster.level
        var toastperunit = state.get.current().rockettoaster.toastperunit
        var efficiency = state.get.current().rockettoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=rockettoaster-toastperunit]",
      value: function() {
        return state.get.current().rockettoaster.toastperunit + state.get.current().rockettoaster.efficiency
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
      element: "[readout=sonictoaster-toast]",
      value: function() {
        var level = state.get.current().sonictoaster.level
        var toastperunit = state.get.current().sonictoaster.toastperunit
        var efficiency = state.get.current().sonictoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=sonictoaster-toastperunit]",
      value: function() {
        return state.get.current().sonictoaster.toastperunit + state.get.current().sonictoaster.efficiency
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
      element: "[readout=plasmatoaster-toast]",
      value: function() {
        var level = state.get.current().plasmatoaster.level
        var toastperunit = state.get.current().plasmatoaster.toastperunit
        var efficiency = state.get.current().plasmatoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=plasmatoaster-toastperunit]",
      value: function() {
        return state.get.current().plasmatoaster.toastperunit + state.get.current().plasmatoaster.efficiency
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
      element: "[readout=atomictoaster-toast]",
      value: function() {
        var level = state.get.current().atomictoaster.level
        var toastperunit = state.get.current().atomictoaster.toastperunit
        var efficiency = state.get.current().atomictoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=atomictoaster-toastperunit]",
      value: function() {
        return state.get.current().atomictoaster.toastperunit + state.get.current().atomictoaster.efficiency
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
      element: "[readout=quantumtoaster-toast]",
      value: function() {
        var level = state.get.current().quantumtoaster.level
        var toastperunit = state.get.current().quantumtoaster.toastperunit
        var efficiency = state.get.current().quantumtoaster.efficiency
        return level * (toastperunit + efficiency)
      },
      suffix: true
    }, {
      element: "[readout=quantumtoaster-toastperunit]",
      value: function() {
        return state.get.current().quantumtoaster.toastperunit + state.get.current().quantumtoaster.efficiency
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
    }]
  }

  var render = {}

  render.all = function() {
    for (var key in mod.all) {
      mod.all[key].forEach(function(item, index) {
        var content = item.value()

        if (content != undefined) {
          if (item.suffix) {
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
