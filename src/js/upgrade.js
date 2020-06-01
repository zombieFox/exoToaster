var upgrade = (function() {

  var mod = {}

  mod.activate = function(options) {

    var stateData = helper.getObject({
      object: state.get.current(),
      path: options.path
    })

    if (state.get.current().cycle.current >= stateData.cost) {

      cycle.consume(stateData.cost)

      if (options.path) {
        helper.setObject({
          object: state.get.current(),
          path: options.path + ".passed",
          newValue: true
        })
      }

      if (options.action) {
        options.action()
      }

      options.card.remove()

    } else {

      report.render(string.mod.upgrade.fail(stateData.cost))

    }
  }

  var render = {}

  render.card = function(override) {
    var options = {
      stage: null,
      path: null,
      name: null,
      description: null,
      action: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var stateData = helper.getObject({
      object: state.get.current(),
      path: options.path
    })

    if (!stateData.passed) {
      var cardBody = helper.node("div|class:card-body")

      var button = helper.node("button:" + options.name + "|class:button button-line mb-2,tabindex:1")

      button.addEventListener("click", function() {
        options.card = cardBody
        mod.activate(options)
      })

      var paraCost = helper.node("p|class:small muted")

      var spanDevelop = helper.node("span:Develop cost ")

      var strongCost = helper.node("strong:" + stateData.cost + " ")

      var abbrIc = helper.node("abbr:Ic|title:Instruction cycles")

      paraCost.appendChild(spanDevelop)

      paraCost.appendChild(strongCost)

      paraCost.appendChild(abbrIc)

      cardBody.appendChild(button)

      if (options.description != null) {
        options.description.forEach(function(item, index) {
          cardBody.appendChild(helper.node("p:" + item + "|class:small"))
        })
      }

      cardBody.appendChild(paraCost)

      helper.e("[stage=" + options.stage + "] [stage=upgrade]").appendChild(cardBody)
    }

  }

  return {
    mod: mod,
    render: render
  }

})()
