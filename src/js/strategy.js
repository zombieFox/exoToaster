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

    var condition

    if ("cycle" in stateData.cost && "toast" in stateData.cost) {
      condition = state.get.current().cycle.current >= stateData.cost.cycle && state.get.current().toast.inventory.current >= stateData.cost.toast
    } else if ("cycle" in stateData.cost) {
      condition = state.get.current().cycle.current >= stateData.cost.cycle
    } else if ("toast" in stateData.cost) {
      condition = state.get.current().toast.inventory.current >= stateData.cost.toast
    }

    if (condition) {

      if ("cycle" in stateData.cost) {
        cycle.consume(stateData.cost.cycle)
      }

      if ("toast" in stateData.cost) {
        toast.consume(stateData.cost.toast)
      }

      if (options.path) {
        helper.setObject({
          object: state.get.current(),
          path: options.path + ".passed",
          newValue: true
        })
      }

      options.card.remove()

    } else {

      report.render.message(string.mod.strategy.fail(stateData))

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

      paraCost.appendChild(spanDevelop)

      var strongCost

      var abbrCost

      if ("cycle" in stateData.cost) {
        var strongCost = helper.node("strong:" + suffix.add({
          number: stateData.cost.cycle,
          abbreviations: true
        }) + " ")

        var abbrCost = helper.node("abbr:Ic|title:Instruction cycle")

        paraCost.appendChild(strongCost)

        paraCost.appendChild(abbrCost)
      }

      if ("cycle" in stateData.cost && "toast" in stateData.cost) {
        var spanAnd = helper.node("span: and ")

        paraCost.appendChild(spanAnd)
      }

      if ("toast" in stateData.cost) {
        var strongCost = helper.node("strong:" + suffix.add({
          number: stateData.cost.toast,
          abbreviations: true
        }) + " ")

        var abbrCost = helper.node("abbr:Tm|title:Toast matter")

        paraCost.appendChild(strongCost)

        paraCost.appendChild(abbrCost)
      }

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
