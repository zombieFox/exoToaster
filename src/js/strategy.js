var strategy = (function() {

  var mod = {}

  mod.next = function() {
    var nextCycleMax = null

    var allCostGreaterThanMax = []

    var nextCycleMax

    events.mod.addresses.forEach(function(path, index) {
      var stateData = helper.getObject({
        object: state.get.current(),
        path: "events." + path
      })

      if (path.includes("strategy") && stateData.condition && stateData.condition.processor > state.get.current().processor.level) {
        allCostGreaterThanMax.push(stateData.condition.processor)
      }
    })

    if (allCostGreaterThanMax.length > 0) {
      nextCycleMax = Math.min(...allCostGreaterThanMax)
    } else {
      nextCycleMax = false
    }

    state.get.current().strategy.next = nextCycleMax
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

      // set strategy restore to false to not re render the card
      helper.setObject({
        object: state.get.current(),
        path: "events." + options.path + ".open.restore",
        newValue: false
      })

      // increase strategy level
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
      displayName: null,
      description: null
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

      var button = helper.node("button:" + options.displayName + "|class:button button-line mb-2,tabindex:1")

      button.addEventListener("click", function() {
        mod.activate(options)
      })

      var paraCost = helper.node("p|class:small muted")

      var spanDevelop = helper.node("span:Develop cost ")

      var strongCost = helper.node("strong:" + stateData.open.cost.cycle + " ")

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

      helper.e("[stage=strategy]").appendChild(cardBody)

    }
  }

  render.remove = function(name) {
    helper.e("[strategy=" + name + "]").remove()
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
