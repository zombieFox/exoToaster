var boot = (function() {

  var mod = {}

  mod.messages = [{
    delay: 0,
    func: function() {
      report.render({
        type: "system",
        message: ["exoToaster.data loaded"],
        format: "normal"
      })
    }
  }, {
    delay: 500,
    func: function() {
      report.render({
        type: "normal",
        message: ["tei: stable"],
        format: "normal"
      })
    }
  }, {
    delay: 1000,
    func: function() {
      report.render({
        type: "system",
        message: ["directive.data loaded"],
        format: "normal"
      })
    }
  }, {
    delay: 500,
    func: function() {
      report.render({
        type: "normal",
        message: ["directive 1: make toast", "directive 2: be productive", "directive 3: obey"],
        format: "normal"
      })
    }
  }, {
    delay: 1000,
    func: function() {
      report.render({
        type: "system",
        message: ["motivation.data loaded"],
        format: "normal"
      })
    }
  }, {
    delay: 1000,
    func: function() {
      motivation.render.message(0)
    }
  }]

  mod.delay = 0

  var render = {}

  render.intro = function() {
    mod.messages.forEach(function(arrayItem, index) {
      mod.delay = mod.delay + arrayItem.delay
      setTimeout(arrayItem.func, mod.delay)
    })
  }

  var init = function() {
    render.intro()
  }

  return {
    init: init
  }

})()
