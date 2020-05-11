var events = (function() {

  var mod = {}

  mod.all = {
    processor: [{
      condition: function() {
        return state.get.current().toast.inventory.current >= 20
      },
      func: function() {
        helper.e("[stage=processor]").classList.remove("is-hidden")
        report.render({
          type: "system",
          message: ["processor discovered"],
          format: "normal"
        })
      },
      passed: false
    }],
    strategy: [{
      condition: function() {
        return state.get.current().processor.level >= 2
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
    }],
    autotoaster: [{
      condition: function() {
        return state.get.current().processor.level >= 4
      },
      func: function() {
        helper.e("[stage=autotoaster]").classList.remove("is-hidden")
        report.render({
          type: "system",
          message: ["autotoaster discovered"],
          format: "normal"
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

  var init = function() {}

  return {
    mod: mod,
    init: init
  }

})()
