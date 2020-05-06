var readout = (function() {

  var mod = {}

  mod.all = [{
    element: "[readout=toast-inventory-current]",
    value: function() {
      return state.get.current().toast.inventory.current
    }
  }, {
    element: "[readout=processor-level]",
    value: function() {
      return state.get.current().processor.level
    }
  }, {
    element: "[readout=processor-cost-toast]",
    value: function() {
      return state.get.current().processor.cost.toast
    }
  }]

  var render = {}

  render.all = function() {
    mod.all.forEach(function(item, index) {
      var content = item.value()
      helper.eA(item.element).forEach(function(item, index) {
        item.textContent = content
      })
    })
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
