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
      element: "[readout=autotoaster-speed-cost-toast]",
      value: function() {
        return state.get.current().autotoaster.speed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=autotoaster-speed-level]",
      value: function() {
        return state.get.current().autotoaster.speed.level
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
      element: "[readout=megatoaster-speed-cost-toast]",
      value: function() {
        return state.get.current().megatoaster.speed.cost.toast
      },
      suffix: true
    }, {
      element: "[readout=megatoaster-speed-level]",
      value: function() {
        return state.get.current().megatoaster.speed.level
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
