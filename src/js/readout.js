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
