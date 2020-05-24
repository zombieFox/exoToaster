var upgrade = (function() {

  var mod = {}

  mod.formula = {
    level: function(number) {
      return (Math.pow(number, 2) * 16)
    },
    cost: function(number) {
      return (Math.pow(number, 2) * 4)
    }
  }

  mod.template = {
    autotoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with spare paperclips",
        prerequisite: function() {
          return state.get.current().autotoaster.efficiency == (this.level - 1) && state.get.current().autotoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=autotoaster]",
        bonus: function() {
          autotoaster.addEfficiency(1)
        },
        live: false
      }
    },
    megatoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with leftover cookies",
        prerequisite: function() {
          return state.get.current().megatoaster.efficiency == (this.level - 1) && state.get.current().megatoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=megatoaster]",
        bonus: function() {
          megatoaster.addEfficiency(1)
        },
        live: false
      }
    },
    rockettoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with aviation turbine fuel",
        prerequisite: function() {
          return state.get.current().rockettoaster.efficiency == (this.level - 1) && state.get.current().rockettoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=rockettoaster]",
        bonus: function() {
          rockettoaster.addEfficiency(1)
        },
        live: false
      }
    },
    sonictoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with ultrasound amplifiers",
        prerequisite: function() {
          return state.get.current().sonictoaster.efficiency == (this.level - 1) && state.get.current().sonictoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=sonictoaster]",
        bonus: function() {
          sonictoaster.addEfficiency(1)
        },
        live: false
      }
    },
    plasmatoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with ionized gases",
        prerequisite: function() {
          return state.get.current().plasmatoaster.efficiency == (this.level - 1) && state.get.current().plasmatoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=plasmatoaster]",
        bonus: function() {
          plasmatoaster.addEfficiency(1)
        },
        live: false
      }
    },
    atomictoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with powerful electromagnets and particle energisers",
        prerequisite: function() {
          return state.get.current().atomictoaster.efficiency == (this.level - 1) && state.get.current().atomictoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=atomictoaster]",
        bonus: function() {
          atomictoaster.addEfficiency(1)
        },
        live: false
      }
    },
    quantumtoaster: function(level) {
      return {
        name: "Efficiency Boost",
        level: level,
        description: "Boost each units efficiency with rubber bands",
        prerequisite: function() {
          return state.get.current().quantumtoaster.efficiency == (this.level - 1) && state.get.current().quantumtoaster.level > mod.formula.level(this.level)
        },
        cost: function() {
          return mod.formula.cost(this.level)
        },
        target: "[stage=quantumtoaster]",
        bonus: function() {
          quantumtoaster.addEfficiency(1)
        },
        live: false
      }
    }
  }

  mod.all = {
    autotoaster: [mod.template.autotoaster(2), mod.template.autotoaster(3), mod.template.autotoaster(4)],
    megatoaster: [mod.template.megatoaster(2), mod.template.megatoaster(3), mod.template.megatoaster(4)],
    rockettoaster: [mod.template.rockettoaster(2), mod.template.rockettoaster(3), mod.template.rockettoaster(4)],
    sonictoaster: [mod.template.sonictoaster(2), mod.template.sonictoaster(3), mod.template.sonictoaster(4)],
    plasmatoaster: [mod.template.plasmatoaster(2), mod.template.plasmatoaster(3), mod.template.plasmatoaster(4)],
    atomictoaster: [mod.template.atomictoaster(2), mod.template.atomictoaster(3), mod.template.atomictoaster(4)],
    quantumtoaster: [mod.template.quantumtoaster(2), mod.template.quantumtoaster(3), mod.template.quantumtoaster(4)]
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

  mod.purchase = function(unit, perk) {

    if (state.get.current().cycle.current >= perk.cost()) {

      cycle.consume(perk.cost())

      perk.bonus()

      render.item.remove(unit, perk)

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

      var button = helper.node("button:" + perk.name + " " + perk.level + "|class:button button-line button-small mb-2,tabindex:1")

      button.addEventListener("click", function() {
        mod.purchase(unit, perk)
      })

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

      target.appendChild(cardBody)
    },
    remove: function(unit, perk) {
      helper.e("[stage=" + unit + "-" + perk.name.replace(" ", "-").toLowerCase() + "-" + perk.level + "]").remove()
      perk.live = false
    }
  }

  var init = function() {

    tick.mod.set({
      name: "upgrade",
      func: function() {
        mod.check()
      },
      interval: 1000
    })

  }

  return {
    mod: mod,
    render: render,
    init: init
  }

})()
