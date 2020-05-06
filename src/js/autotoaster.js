var autotoaster = (function() {

  var mod = {}

  mod.add = function(amount) {
    state.mod.set({
      path: "autotoaster.level",
      value: state.mod.get.current().autotoaster.level + amount
    })
  }

  mod.remove = function(amount) {
    state.mod.set({
      path: "autotoaster.level",
      value: state.mod.get.current().autotoaster.level - amount
    })
  }

  mod.increase = function(amount) {
    var costDetails = cost.calculate({
      type: "arithmetic",
      constant: state.get.current().autotoaster.cost.constant,
      difference: state.get.current().autotoaster.cost.difference,
      level: {
        current: state.get.current().autotoaster.level,
        target: state.get.current().autotoaster.level + amount
      }
    })

    if (state.get.current().toast.inventory.current >= costDetails.cost.total) {
      toast.consume(costDetails.cost.total)
      state.set({
        path: "autotoaster.cost.toast",
        value: sequence.arithmetic.value({
          target: costDetails.level.target + 1,
          constant: state.get.current().autotoaster.cost.constant,
          difference: state.get.current().autotoaster.cost.difference
        })
      })
      add(amount)
    }
  }

  var add = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.add(amount)
    }
  }

  var remove = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.remove(amount)
    }
  }

  var increase = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.increase(amount)
    }
  }

  return {
    mod: mod,
    add: add,
    remove: remove,
    increase: increase
  }

})()
