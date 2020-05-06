var toast = (function() {

  var mod = {}

  mod.add = {
    lifetime: function(amount) {
      state.mod.set({
        path: "toast.lifetime.current",
        value: state.mod.get.current().toast.lifetime.current + amount
      })
    },
    inventory: function(amount) {
      state.mod.set({
        path: "toast.inventory.current",
        value: state.mod.get.current().toast.inventory.current + amount
      })
    }
  }

  mod.remove = {
    inventory: function(amount) {
      state.mod.set({
        path: "toast.inventory.current",
        value: state.mod.get.current().toast.inventory.current - amount
      })
    }
  }

  mod.make = function(amount) {
    mod.add.lifetime(amount)
    mod.add.inventory(amount)
  }

  mod.consume = function(amount) {
    mod.remove.inventory(amount)
  }

  var make = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.make(amount)
    }
  }

  var consume = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.consume(amount)
    }
  }

  return {
    mod: mod,
    make: make,
    consume: consume
  }

})()
