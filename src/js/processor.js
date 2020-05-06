var processor = (function() {

  var mod = {}

  mod.add = function(amount) {
    state.mod.set({
      path: "processor.level",
      value: state.mod.get.current().processor.level + amount
    })
  }

  mod.remove = function(amount) {
    state.mod.set({
      path: "processor.level",
      value: state.mod.get.current().processor.level - amount
    })
  }

  mod.increase = function(amount) {
    var costDetails = cost.calculate({
      type: "geometric",
      constant: state.get.current().processor.cost.constant,
      difference: state.get.current().processor.cost.difference,
      level: {
        current: state.get.current().processor.level,
        target: state.get.current().processor.level + amount
      }
    })
    // console.log(costDetails);
    if (state.get.current().toast.inventory.current >= costDetails.cost.total) {
      toast.consume(costDetails.cost.total)
      state.set({
        path: "processor.cost.toast",
        value: sequence.geometric.value({
          target: costDetails.level.target + 1,
          constant: state.get.current().processor.cost.constant,
          difference: state.get.current().processor.cost.difference
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
