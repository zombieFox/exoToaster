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
      },
      suffix: true
    }, {
      element: "[readout=toast-output-persec]",
      value: function() {
        return state.get.current().autotoaster.output.persec + state.get.current().megatoaster.output.persec + state.get.current().rockettoaster.output.persec + state.get.current().sonictoaster.output.persec + state.get.current().plasmatoaster.output.persec + state.get.current().atomictoaster.output.persec + state.get.current().quantumtoaster.output.persec
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
      element: "[readout=cycle-interval-current]",
      value: function() {
        return state.get.current().cycle.interval.current / 1000
      }
    }, {
      element: "[readout=cycle-maxmultiplier]",
      value: function() {
        return state.get.current().cycle.maxmultiplier
      }
    }],
    electromagnetic: [{
      element: "[readout=electromagnetic-level]",
      value: function() {
        return state.get.current().electromagnetic.level
      },
      suffix: true
    }, {
      element: "[readout=electromagnetic-cost-toast]",
      value: function() {
        return state.get.current().electromagnetic.cost.toast
      },
      suffix: true
    }],
    motivation: [{
      element: "[readout=motivation-bonus]",
      value: function() {
        return state.get.current().motivation.level + 1
      },
      suffix: true
    }],
    autotoaster: [{
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
      element: "[readout=autotoaster-output-total]",
      value: function() {
        return state.get.current().autotoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-output-unit]",
      value: function() {
        return state.get.current().autotoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-interval]",
      value: function() {
        return state.get.current().autotoaster.interval / 1000
      },
      suffix: true
    }],
    megatoaster: [{
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
      element: "[readout=megatoaster-output-total]",
      value: function() {
        return state.get.current().megatoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-output-unit]",
      value: function() {
        return state.get.current().megatoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-interval]",
      value: function() {
        return state.get.current().megatoaster.interval / 1000
      },
      suffix: true
    }],
    rockettoaster: [{
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
      element: "[readout=rockettoaster-output-total]",
      value: function() {
        return state.get.current().rockettoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=rockettoaster-output-unit]",
      value: function() {
        return state.get.current().rockettoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=rockettoaster-interval]",
      value: function() {
        return state.get.current().rockettoaster.interval / 1000
      },
      suffix: true
    }],
    sonictoaster: [{
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
      element: "[readout=sonictoaster-output-total]",
      value: function() {
        return state.get.current().sonictoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=sonictoaster-output-unit]",
      value: function() {
        return state.get.current().sonictoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=sonictoaster-interval]",
      value: function() {
        return state.get.current().sonictoaster.interval / 1000
      },
      suffix: true
    }],
    plasmatoaster: [{
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
      element: "[readout=plasmatoaster-output-total]",
      value: function() {
        return state.get.current().plasmatoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=plasmatoaster-output-unit]",
      value: function() {
        return state.get.current().plasmatoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=plasmatoaster-interval]",
      value: function() {
        return state.get.current().plasmatoaster.interval / 1000
      },
      suffix: true
    }],
    atomictoaster: [{
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
      element: "[readout=atomictoaster-output-total]",
      value: function() {
        return state.get.current().atomictoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=atomictoaster-output-unit]",
      value: function() {
        return state.get.current().atomictoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=atomictoaster-interval]",
      value: function() {
        return state.get.current().atomictoaster.interval / 1000
      },
      suffix: true
    }],
    quantumtoaster: [{
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
      element: "[readout=quantumtoaster-output-total]",
      value: function() {
        return state.get.current().quantumtoaster.output.total
      },
      suffix: true
    }, {
      element: "[readout=quantumtoaster-output-unit]",
      value: function() {
        return state.get.current().quantumtoaster.output.unit
      },
      suffix: true
    }, {
      element: "[readout=quantumtoaster-interval]",
      value: function() {
        return state.get.current().quantumtoaster.interval / 1000
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
