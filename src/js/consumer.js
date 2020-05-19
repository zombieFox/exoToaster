var consumer = (function() {

  var mod = {}

  mod.add = function() {
    var min = Math.round(state.get.current().processor.level / 8)

    var max = state.get.current().processor.level * 2

    if (min <= 0) {
      min = 1
    }

    var amount = helper.randomNumber(min, max)

    if (amount > state.get.current().toast.inventory.current) {
      amount = state.get.current().toast.inventory.current
    }

    state.get.current().consumer.current = state.get.current().consumer.current + amount

    // console.log("toast consumed", amount);

    toast.consume(amount)
  }

  mod.interval = function() {
    var min = Math.round(state.get.current().processor.level / 4)

    var max = state.get.current().processor.level

    if (min <= 0) {
      min = 1
    }

    var interval = Math.round(Math.random() * 10000)

    // console.log("consumer in: " + Math.round(interval / 1000) + "s")

    return interval
  }

  return {
    mod: mod
  }

})()
