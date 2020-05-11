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
      },
      suffix: true
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
    autotoaster: [{
      element: "[readout=autotoaster-stat-toast]",
      value: function() {
        var level = state.get.current().autotoaster.level
        var efficiency = state.get.current().autotoasterefficiency.level
        var toastperunit = state.get.current().autotoaster.toastperunit
        return level * efficiency * toastperunit
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-stat-speed]",
      value: function() {
        var interval
        if (state.get.current().autotoaster.level <= 0) {
          interval = 0
        } else {
          interval = (state.get.current().autotoasterspeed.interval.starting - (state.get.current().autotoasterspeed.level * 100)) / 1000
        }
        return interval
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
    }, {
      element: "[readout=autotoasterefficiency-cost-toast]",
      value: function() {
        return state.get.current().autotoasterefficiency.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=autotoasterefficiency-level]",
      value: function() {
        return state.get.current().autotoasterefficiency.level
      },
      suffix: true
    }],
    megatoaster: [{
      element: "[readout=megatoaster-stat-toast]",
      value: function() {
        var level = state.get.current().megatoaster.level
        var efficiency = state.get.current().megatoasterefficiency.level
        var toastperunit = state.get.current().megatoaster.toastperunit
        return level * efficiency * toastperunit
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-stat-speed]",
      value: function() {
        var interval
        if (state.get.current().megatoaster.level <= 0) {
          interval = 0
        } else {
          interval = (state.get.current().megatoasterspeed.interval.starting - (state.get.current().megatoasterspeed.level * 100)) / 1000
        }
        return interval
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
    }, {
      element: "[readout=megatoasterefficiency-cost-toast]",
      value: function() {
        return state.get.current().megatoasterefficiency.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=megatoasterefficiency-level]",
      value: function() {
        return state.get.current().megatoasterefficiency.level
      },
      suffix: true
    }],
    rockettoaster: [{
      element: "[readout=rockettoaster-stat-toast]",
      value: function() {
        var level = state.get.current().rockettoaster.level
        var efficiency = state.get.current().rockettoasterefficiency.level
        var toastperunit = state.get.current().rockettoaster.toastperunit
        return level * efficiency * toastperunit
      },
      suffix: true
    }, {
      element: "[readout=rockettoaster-stat-speed]",
      value: function() {
        var interval
        if (state.get.current().rockettoaster.level <= 0) {
          interval = 0
        } else {
          interval = (state.get.current().rockettoasterspeed.interval.starting - (state.get.current().rockettoasterspeed.level * 100)) / 1000
        }
        return interval
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
    }, {
      element: "[readout=rockettoasterefficiency-cost-toast]",
      value: function() {
        return state.get.current().rockettoasterefficiency.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=rockettoasterefficiency-level]",
      value: function() {
        return state.get.current().rockettoasterefficiency.level
      },
      suffix: true
    }],
    atomictoaster: [{
      element: "[readout=atomictoaster-stat-toast]",
      value: function() {
        var level = state.get.current().atomictoaster.level
        var efficiency = state.get.current().atomictoasterefficiency.level
        var toastperunit = state.get.current().atomictoaster.toastperunit
        return level * efficiency * toastperunit
      },
      suffix: true
    }, {
      element: "[readout=atomictoaster-stat-speed]",
      value: function() {
        var interval
        if (state.get.current().atomictoaster.level <= 0) {
          interval = 0
        } else {
          interval = (state.get.current().atomictoasterspeed.interval.starting - (state.get.current().atomictoasterspeed.level * 100)) / 1000
        }
        return interval
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
    }, {
      element: "[readout=atomictoasterefficiency-cost-toast]",
      value: function() {
        return state.get.current().atomictoasterefficiency.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=atomictoasterefficiency-level]",
      value: function() {
        return state.get.current().atomictoasterefficiency.level
      },
      suffix: true
    }],
    quantumtoaster: [{
      element: "[readout=quantumtoaster-stat-toast]",
      value: function() {
        var level = state.get.current().quantumtoaster.level
        var efficiency = state.get.current().quantumtoasterefficiency.level
        var toastperunit = state.get.current().quantumtoaster.toastperunit
        return level * efficiency * toastperunit
      },
      suffix: true
    }, {
      element: "[readout=quantumtoaster-stat-speed]",
      value: function() {
        var interval
        if (state.get.current().quantumtoaster.level <= 0) {
          interval = 0
        } else {
          interval = (state.get.current().quantumtoasterspeed.interval.starting - (state.get.current().quantumtoasterspeed.level * 100)) / 1000
        }
        return interval
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
    }, {
      element: "[readout=quantumtoasterefficiency-cost-toast]",
      value: function() {
        return state.get.current().quantumtoasterefficiency.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=quantumtoasterefficiency-level]",
      value: function() {
        return state.get.current().quantumtoasterefficiency.level
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
              number: content
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


  var init = function() {
    render.all()
  }

  return {
    mod: mod,
    render: render,
    init: init
  }

})()
