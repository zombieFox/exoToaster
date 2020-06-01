var strategy = (function() {

  var mod = {}

  mod.next = function() {
    var nextCycleMax = null

    var allCostGreaterThanMax = []

    for (var unit in state.get.current().event.strategy) {
      state.get.current().event.strategy[unit].forEach(function(event, index) {
        event.condition.forEach(function(condition, index) {

          if (condition.check == "processor.level" && !event.passed) {
            allCostGreaterThanMax.push(condition.value)
          }

        })
      })
    }

    if (allCostGreaterThanMax.length > 0) {
      nextCycleMax = Math.min(...allCostGreaterThanMax)
    } else {
      nextCycleMax = false
    }

    state.get.current().strategy.next = nextCycleMax
  }

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

      options.card.remove()

    } else {

      report.render(string.mod.strategy.fail(stateData.cost))

    }
  }

  var render = {}

  render.card = function(override) {
    var options = {
      path: null,
      name: null,
      description: null
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

      helper.e("[stage=strategy").appendChild(cardBody)
    }

  }

  render.next = function() {
    if (state.get.current().strategy.next) {
      helper.e("[stage=next-strategy]").classList.remove("is-hidden")
    } else {
      helper.e("[stage=next-strategy]").classList.add("is-hidden")
    }
  }

  var next = function() {
    mod.next()
    render.next()
  }

  var init = function() {
    next()
  }

  return {
    mod: mod,
    render: render,
    next: next,
    init: init
  }

})()
