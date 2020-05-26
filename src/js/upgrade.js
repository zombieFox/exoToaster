var upgrade = (function() {

  var mod = {}

  mod.formula = {
    speed: {
      milestone: function(number) {
        return Math.pow(number + 2, 3)
      }
    },
    cost: {
      efficiency: function(number) {
        return (Math.pow(number, 2) * 8)
      },
      speed: function(number) {
        return number * 8
      }
    }
  }

  mod.template = {
    efficiency: function(name, func) {
      return {
        level: state.get.current()[name].efficiency,
        name: string.mod.upgrade.efficiency,
        description: string.mod.upgrade[name].efficiency,
        milestone: state.get.current()[name].milestone.efficiency,
        prerequisite: function() {
          return state.get.current()[name].efficiency <= 10 && state.get.current()[name].efficiency == (this.level) && state.get.current()[name].level > this.milestone
        },
        cost: function() {
          return mod.formula.cost.efficiency(state.get.current()[name].efficiency + 1)
        },
        target: "[stage=" + name + "]",
        bonus: function() {
          func(1)
          state.get.current()[name].milestone.efficiency = state.get.current()[name].milestone.efficiency * 2
          this.level = state.get.current()[name].efficiency
          this.milestone = state.get.current()[name].milestone.efficiency
        },
        live: false
      }
    },
    speed: function(name, milestone, speed, func) {
      return {
        milestone: milestone,
        speed: speed,
        name: string.mod.upgrade.speed,
        description: string.mod.upgrade[name].speed,
        prerequisite: function() {
          return state.get.current()[name].level > 1 && state.get.current()[name].level > milestone && state.get.current()[name].speed == speed
        },
        cost: function() {
          return mod.formula.cost.speed(state.get.current()[name].speed + 1)
        },
        target: "[stage=" + name + "]",
        bonus: function() {
          func(1)
        },
        live: false
      }
    }
  }

  mod.all = {}

  mod.add = function() {
    mod.all.autotoaster = []
    mod.all.megatoaster = []
    mod.all.rockettoaster = []
    mod.all.sonictoaster = []
    mod.all.plasmatoaster = []
    mod.all.atomictoaster = []
    mod.all.quantumtoaster = []

    mod.all.autotoaster.push(mod.template.efficiency("autotoaster", autotoaster.efficiency.add))
    mod.all.megatoaster.push(mod.template.efficiency("megatoaster", megatoaster.efficiency.add))
    mod.all.rockettoaster.push(mod.template.efficiency("rockettoaster", rockettoaster.efficiency.add))
    mod.all.sonictoaster.push(mod.template.efficiency("sonictoaster", sonictoaster.efficiency.add))
    mod.all.plasmatoaster.push(mod.template.efficiency("plasmatoaster", plasmatoaster.efficiency.add))
    mod.all.atomictoaster.push(mod.template.efficiency("atomictoaster", atomictoaster.efficiency.add))
    mod.all.quantumtoaster.push(mod.template.efficiency("quantumtoaster", quantumtoaster.efficiency.add))

    for (var i = 0; i <= 6; i++) {
      mod.all.autotoaster.push(mod.template.speed("autotoaster", mod.formula.speed.milestone(i), i, autotoaster.speed.add))
      mod.all.megatoaster.push(mod.template.speed("megatoaster", mod.formula.speed.milestone(i), i, megatoaster.speed.add))
      mod.all.rockettoaster.push(mod.template.speed("rockettoaster", mod.formula.speed.milestone(i), i, rockettoaster.speed.add))
      mod.all.sonictoaster.push(mod.template.speed("sonictoaster", mod.formula.speed.milestone(i), i, sonictoaster.speed.add))
      mod.all.plasmatoaster.push(mod.template.speed("plasmatoaster", mod.formula.speed.milestone(i), i, plasmatoaster.speed.add))
      mod.all.atomictoaster.push(mod.template.speed("atomictoaster", mod.formula.speed.milestone(i), i, atomictoaster.speed.add))
      mod.all.quantumtoaster.push(mod.template.speed("quantumtoaster", mod.formula.speed.milestone(i), i, quantumtoaster.speed.add))
    }
  }

  mod.check = function() {
    for (var unit in mod.all) {
      mod.all[unit].forEach(function(perk, index) {

        if (perk.prerequisite() && !perk.live) {
          perk.live = true
          render.item.add(unit, perk)
        }

      })
    }
  }

  mod.purchase = function(perk, cardBody) {

    if (state.get.current().cycle.current >= perk.cost()) {

      cycle.consume(perk.cost())

      perk.bonus()

      render.item.remove(perk, cardBody)

    } else {

      report.render({
        type: "error",
        message: [perk.cost() + " instruction cycles needed"],
        format: "normal"
      })

    }
  }

  var render = {}

  render.item = {
    add: function(unit, perk) {
      var stageName = unit + "-" + perk.name.replace(" ", "-").toLowerCase() + "-" + perk.level

      var cardBody = helper.node("div|class:card-body,stage:" + stageName)

      var paraDescription = helper.node("p:" + perk.description + "|class:small muted")

      var button = helper.node("button:" + perk.name + "|class:button button-line button-small mb-2,tabindex:1")

      var paraCost = helper.node("p|class:small muted")

      var spanDevelop = helper.node("span:Develop cost ")

      var strongCost = helper.node("strong:" + perk.cost() + " ")

      var abbrIc = helper.node("abbr:Ic|title:Instruction cycles")

      paraCost.appendChild(spanDevelop)

      paraCost.appendChild(strongCost)

      paraCost.appendChild(abbrIc)

      cardBody.appendChild(button)

      cardBody.appendChild(paraDescription)

      cardBody.appendChild(paraCost)

      var target = helper.e(perk.target + " [stage=upgrade]")

      button.addEventListener("click", function() {
        mod.purchase(perk, cardBody)
      })

      target.appendChild(cardBody)
    },
    remove: function(perk, cardBody) {
      cardBody.remove()
      perk.live = false
    }
  }

  var init = function() {
    mod.add()
    tick.mod.set({
      name: "upgrade",
      func: function() {
        mod.check()
      },
      interval: 2000
    })

  }

  return {
    mod: mod,
    render: render,
    init: init
  }

})()
