var readout = (function() {

  var mod = {}

  mod.all = [{
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
  }]

  var render = {}

  render.all = function() {
    mod.all.forEach(function(item, index) {
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

  var init = function() {
    render.all()
    tick.set({
      name: "readout",
      func: function() {
        render.all()
      },
      interval: "readout.interval"
    })
  }

  return {
    mod: mod,
    render: render,
    init: init
  }

})()
