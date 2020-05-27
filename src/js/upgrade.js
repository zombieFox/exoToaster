var upgrade = (function() {

  var mod = {}

  mod.activeUpgradeCount = {}

  mod.onscreen = function() {
    for (var unit in state.get.current().upgrade) {
      for (var stat in state.get.current().upgrade[unit]) {
        state.get.current().upgrade[unit][stat].forEach(function(perk, index) {

          perk.onscreen = false

        })
      }
    }
  }

  mod.check = function() {
    for (var unit in state.get.current().upgrade) {

      mod.activeUpgradeCount[unit] = {}

      for (var stat in state.get.current().upgrade[unit]) {

        mod.activeUpgradeCount[unit][stat] = 0

        state.get.current().upgrade[unit][stat].forEach(function(perk, index) {

          var condition

          switch (perk.comparisonOperators) {

            case "greater":

              condition = helper.getObject({
                object: state.get.current(),
                path: perk.check
              }) > perk.condition
              break

            case "less":

              condition = helper.getObject({
                object: state.get.current(),
                path: perk.check
              }) < perk.condition
              break

            case "equal":

              condition = helper.getObject({
                object: state.get.current(),
                path: perk.check
              }) == perk.condition
              break
          }

          if (condition && !perk.onscreen && !perk.passed) {
            if (mod.activeUpgradeCount[unit][stat] < 1) {
              perk.onscreen = true
              render.item.add(unit, perk)
            }
          }

          if (perk.onscreen) {
            mod.activeUpgradeCount[unit][stat]++
          }

        })
      }
    }
  }

  mod.purchase = function(perk) {
    var currency

    switch (perk.currency) {
      case "cycle":
        currency = state.get.current().cycle.current
        break
      case "toast":
        currency = state.get.current().toast.inventory.current
        break
    }

    if (currency >= perk.cost) {

      switch (perk.currency) {
        case "cycle":
          cycle.consume(perk.cost)
          break
        case "toast":
          toast.consume(perk.cost)
          break
      }

      switch (perk.success) {
        case "add":
          helper.setObject({
            object: state.get.current(),
            path: perk.targetValue,
            newValue: helper.getObject({
              object: state.get.current(),
              path: perk.targetValue
            }) + perk.bonus
          })
          break
        case "remove":
          helper.setObject({
            object: state.get.current(),
            path: perk.targetValue,
            newValue: helper.getObject({
              object: state.get.current(),
              path: perk.targetValue
            }) - perk.bonus
          })
          break
      }

      perk.passed = true
      perk.onscreen = false


      switch (perk.targetStage) {
        case "autotoaster":
          autotoaster.set.interval()
          autotoaster.set.output()
          break
        case "megatoaster":
          megatoaster.set.interval()
          megatoaster.set.output()
          break
        case "rockettoaster":
          rockettoaster.set.interval()
          rockettoaster.set.output()
          break
        case "sonictoaster":
          sonictoaster.set.interval()
          sonictoaster.set.output()
          break
        case "plasmatoaster":
          plasmatoaster.set.interval()
          plasmatoaster.set.output()
          break
        case "atomictoaster":
          atomictoaster.set.interval()
          atomictoaster.set.output()
          break
        case "quantumtoaster":
          quantumtoaster.set.interval()
          quantumtoaster.set.output()
          break
      }

    } else {

      var message

      switch (perk.currency) {
        case "cycle":
          message = [perk.cost + " instruction cycles needed"]
          break
        case "toast":
          message = [perk.cost + " toast matter needed"]
          break
      }

      report.render({
        type: "error",
        message: message,
        format: "normal"
      })

    }
  }

  var render = {}

  render.item = {
    add: function(unit, perk) {
      var cardBody = helper.node("div|class:card-body")

      var paraDescription = helper.node("p:" + perk.description + "|class:small muted")

      var button = helper.node("button:" + perk.name + "|class:button button-line button-small mb-2,tabindex:1")

      var paraCost = helper.node("p|class:small muted")

      var spanDevelop = helper.node("span:Develop cost ")

      var strongCost = helper.node("strong:" + perk.cost + " ")

      var abbrIc

      switch (perk.currency) {
        case "cycle":
          abbrIc = helper.node("abbr:Ic|title:Instruction cycles")
          break
        case "toast":
          abbrIc = helper.node("abbr:Tm|title:Toast matter")
          break
      }

      paraCost.appendChild(spanDevelop)

      paraCost.appendChild(strongCost)

      paraCost.appendChild(abbrIc)

      cardBody.appendChild(button)

      cardBody.appendChild(paraDescription)

      cardBody.appendChild(paraCost)

      var target = helper.e("[stage=" + perk.targetStage + "] [stage=upgrade]")

      button.addEventListener("click", function() {
        mod.purchase(perk)
        render.item.remove(perk, cardBody)
      })

      target.appendChild(cardBody)
    },
    remove: function(perk, cardBody) {
      if (!perk.onscreen && cardBody) {
        cardBody.remove()
      }
    }
  }

  var init = function() {
    mod.onscreen()
  }

  return {
    mod: mod,
    render: render,
    init: init
  }

})()
