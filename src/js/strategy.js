var strategy = (function() {

  var mod = {}

  mod.strings = {
    autotoaster: {
      displayName: "Auto Toasters",
      unlock: "autotoaster technology developed"
    },
    megatoaster: {
      displayName: "Mega Toasters",
      unlock: "megatoaster technology developed"
    },
    rockettoaster: {
      displayName: "Rocket Toasters",
      unlock: "rockettoaster technology developed"
    },
    atomictoaster: {
      displayName: "Atomic Toasters",
      unlock: "atomictoaster technology developed"
    },
    quantumtoaster: {
      displayName: "Quantum Toasters",
      unlock: "quantumtoaster technology developed"
    },
    success: function(name) {
      return name + " technology developed"
    },
    fail: function(amount) {
      return amount + " instruction cycles needed"
    }
  }

  mod.activate = function(name) {
    if (!state.get.current().strategy[name].active) {

      if (state.get.current().cycle.current >= state.get.current().strategy[name].cost.cycle) {
        cycle.mod.remove(state.get.current().strategy[name].cost.cycle)
        state.set({
          path: "strategy." + name + ".active",
          value: true
        })
        render.remove(name)
        report.render({
          type: "success",
          message: [mod.strings.success(name)],
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
  }

  var render = {}

  render.card = function(name) {
    var cardBody = helper.node("div|class:card-body,strategy:" + name)

    var buttonName = name.replace("toaster", " Toaster")
    buttonName = buttonName.charAt(0).toUpperCase() + buttonName.slice(1)

    var button = helper.node("button:Develop " + buttonName + "|class:button button-line button-small mb-2")
    button.addEventListener("click", function() {
      mod.activate(name)
    }, false);

    var para = helper.node("p:" + state.get.current().strategy[name].cost.cycle + " |class:small muted")
    var abbr = helper.node("abbr:Ic|title:Instruction cycles")

    para.appendChild(abbr)
    cardBody.appendChild(button)
    cardBody.appendChild(para)

    return cardBody
  }

  render.add = function(name) {
    helper.e("[stage=strategy]").appendChild(render.card(name))
  }

  render.remove = function(name) {
    helper.e("[strategy=" + name + "]").remove()
  }

  return {
    mod: mod,
    render: render
  }

})()
