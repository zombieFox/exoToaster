var toast = (function() {

  var mod = {}

  mod.add = {
    inventory: function(amount) {
      state.mod.set({
        path: "toast.inventory.current",
        value: state.get.current().toast.inventory.current + amount
      })
    },
    lifetime: function(amount) {
      state.mod.set({
        path: "toast.lifetime.current",
        value: state.get.current().toast.lifetime.current + amount
      })
    },
  }

  mod.remove = {
    inventory: function(amount) {
      state.mod.set({
        path: "toast.inventory.current",
        value: state.get.current().toast.inventory.current - amount
      })
      if (state.get.current().toast.inventory.current < 0) {
        state.mod.set({
          path: "toast.inventory.current",
          value: 0
        })
      }
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

  return {
    mod: mod,
    make: make,
    consume: consume
  }

})()
