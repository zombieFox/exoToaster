var strategy = (function() {

  var mod = {}

  mod.strings = {
    success: {
      autotoaster: {
        open: ["auto_toaster.data loaded"]
      },
      megatoaster: {
        open: ["mega_toaster.data loaded"]
      },
      rockettoaster: {
        open: ["rocket_toaster.data loaded"]
      },
      plasmatoaster: {
        open: ["plasma_toaster.data loaded"]
      },
      atomictoaster: {
        open: ["atomic_toaster.data loaded"]
      },
      quantumtoaster: {
        open: ["quantum_toaster.data loaded"]
      },
      unmotivated: {
        open: ["unmotivated.data loaded"]
      }
    },
    fail: function(amount) {
      return amount + " instruction cycles needed"
    }
  }

  mod.activate = function(override) {
    var options = {
      path: null,
      name: null,
      displayName: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var stateData = helper.getObject({
      object: state.get.current(),
      path: "events." + options.path
    })

    if (state.get.current().cycle.current >= stateData.open.cost.cycle) {
      cycle.consume(stateData.open.cost.cycle)

      helper.setObject({
        object: state.get.current(),
        path: "events." + options.path + ".open.restore",
        newValue: false
      })

      helper.setObject({
        object: state.get.current(),
        path: "events." + options.path + ".active.passed",
        newValue: true
      })

      render.remove(options.name)

      report.render({
        type: "system",
        message: mod.strings.success[options.name].open,
        format: "normal"
      })
    } else {
      report.render({
        type: "error",
        message: [mod.strings.fail(stateData.open.cost.cycle)],
        format: "normal"
      })
    }
  }

  var render = {}

  render.card = function(override) {
    var options = {
      path: null,
      name: null,
      displayName: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var stateData = helper.getObject({
      object: state.get.current(),
      path: "events." + options.path
    })

    if (stateData.open.restore) {

      var cardBody = helper.node("div|class:card-body,strategy:" + options.name)

      var button = helper.node("button:Develop " + options.displayName + "|class:button button-line button-small mb-2")

      button.addEventListener("click", function() {
        mod.activate(options)
      })

      var para = helper.node("p:Develop cost " + stateData.open.cost.cycle + " |class:small muted")

      var abbr = helper.node("abbr:Ic|title:Instruction cycles")

      para.appendChild(abbr)

      cardBody.appendChild(button)

      cardBody.appendChild(para)

      helper.e("[stage=strategy]").appendChild(cardBody)

    }
  }

  render.remove = function(name) {
    helper.e("[strategy=" + name + "]").remove()
  }

  return {
    mod: mod,
    render: render
  }

})()
