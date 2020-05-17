var strategy = (function() {

  var mod = {}

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
        path: "events." + options.path + ".active.level",
        newValue: helper.getObject({
          object: state.get.current(),
          path: "events." + options.path + ".active.level"
        }) + 1
      })

      render.remove(options.name)
    } else {
      report.render({
        type: "error",
        message: [stateData.open.cost.cycle + " instruction cycles needed"],
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

      var button = helper.node("button:Develop " + options.displayName + "|class:button button-line button-small mb-2,tabindex:1")

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
