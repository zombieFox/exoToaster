var toast = (function() {

  var mod = {}

  mod.add = {
    inventory: function(amount) {
      state.get.current().toast.inventory.current = state.get.current().toast.inventory.current + amount
    },
    lifetime: function(amount) {
      state.get.current().toast.lifetime.current = state.get.current().toast.lifetime.current + amount
    }
  }

  mod.remove = {
    inventory: function(amount) {
      state.get.current().toast.inventory.current = state.get.current().toast.inventory.current - amount

      if (state.get.current().toast.inventory.current < 0) {
        state.get.current().toast.inventory.current = 0
      }
    }
  }

  mod.clear = {
    inventory: function(amount) {
      state.get.current().toast.inventory.current = 0
    },
    lifetime: function(amount) {
      state.get.current().toast.lifetime.current = 0
    }
  }

  var make = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.add.lifetime(amount)
      mod.add.inventory(amount)
    }
  }

  var consume = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.remove.inventory(amount)
    }
  }

  var clear = function() {
    mod.clear.inventory()
    mod.clear.lifetime()
  }

  return {
    mod: mod,
    make: make,
    consume: consume,
    clear: clear,
  }

})()
