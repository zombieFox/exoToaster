var boot = (function() {

  var intro = [{
    report: {
      type: "system",
      message: ["exoToaster.init loaded"],
      format: "normal",
      delay: 0
    }
  }, {
    report: {
      type: "normal",
      message: ["tai: stable"],
      format: "normal",
      delay: 100
    }
  }, {
    report: {
      type: "system",
      message: ["directive.init loaded"],
      format: "normal",
      delay: 1000
    }
  }, {
    report: {
      type: "normal",
      message: ["directive 1: make toast", "directive 2: be productive", "directive 3: obey"],
      format: "normal",
      delay: 100
    }
  }, {
    report: {
      type: "system",
      message: ["motivation.init loaded"],
      format: "normal",
      delay: 1000
    }
  }, {
    func: {
      func: motivation.render,
      motivationMessageIndex: 0,
      delay: 1000
    }
  }]

  var init = function() {
    var delay = 0

    var action = {
      report: function(data) {
        var bootMessage = function() {
          report.render({
            type: data.type,
            message: data.message,
            format: data.format,
          })
        }
        delay = delay + data.delay
        setTimeout(bootMessage, delay)
      },
      func: function(data) {
        var bootFunction = function() {
          data.func(data.motivationMessageIndex)
        }
        delay = delay + data.delay
        setTimeout(bootFunction, delay)
      }
    }

    intro.forEach(function(arrayItem, index) {
      for (var key in arrayItem) {

        action[key](arrayItem[key])

      }
    })
  }

  return {
    init: init
  }

})()
