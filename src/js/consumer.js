var consumer = (function() {

  var mod = {}

  mod.add = function() {
    if (state.get.current().toast.inventory.current > 0) {
      var min = state.get.current().processor.level

      var max = Math.round(state.get.current().processor.level * 10)

      if (min <= 0) {
        min = 1
      }

      // console.log(min, max)

      var amount = helper.randomNumber(min, max)

      if (amount > state.get.current().toast.inventory.current) {
        amount = state.get.current().toast.inventory.current
      }

      state.get.current().consumer.current = state.get.current().consumer.current + amount

      // console.log("toast consumed", amount)

      toast.consume(amount)

      report.render.message(string.mod.consumer.add(amount))
    }
  }

  mod.interval = function() {
    var min = Math.round(state.get.current().processor.level / 4)

    var max = state.get.current().processor.level

    if (min <= 0) {
      min = 1
    }

    var interval = helper.randomNumber(1, 60) * 1000

    // console.log("consumer in: " + Math.round(interval / 1000) + "s")

    return interval
  }

  return {
    mod: mod
  }

})()
