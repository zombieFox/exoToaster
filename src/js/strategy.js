var strategy = (function() {

  var mod = {}

  mod.strings = {
    name: {
      autotoaster: "Auto Toasters",
      megatoaster: "Mega Toasters",
      rockettoaster: "Rocket Toasters",
      atomictoaster: "Atomic Toasters",
      quantumtoaster: "Quantum Toasters",
      unmotivated: "Unmotivated"
    },
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

  mod.activate = function(name) {
    if (state.get.current().cycle.current >= state.get.current().strategy[name].cost.cycle) {
      cycle.mod.remove(state.get.current().strategy[name].cost.cycle)

      state.set({
        path: "strategy." + name + ".active",
        value: true
      })

      render.remove(name)

      report.render({
        type: "system",
        message: mod.strings.success[name].open,
        format: "normal"
      })
    } else {
      report.render({
        type: "error",
        message: [mod.strings.fail(state.get.current().strategy[name].cost.cycle)],
        format: "normal"
      })
    }
  }

  var render = {}

  render.card = function(name) {
    var cardBody = helper.node("div|class:card-body,strategy:" + name)

    var buttonName = mod.strings.name[name]

    var button = helper.node("button:Develop " + buttonName + "|class:button button-line button-small mb-2")
    button.addEventListener("click", function() {
      mod.activate(name)
    })

    var para = helper.node("p:Develop cost " + state.get.current().strategy[name].cost.cycle + " |class:small muted")
    var abbr = helper.node("abbr:Ic|title:Instruction cycles")

    para.appendChild(abbr)
    cardBody.appendChild(button)
    cardBody.appendChild(para)

    return cardBody
  }

  render.add = function(name) {
    if (!state.get.current().strategy[name].active) {
      helper.e("[stage=strategy]").appendChild(render.card(name))
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
