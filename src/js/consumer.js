var consumer = (function() {

  var mod = {}

  mod.add = function() {
    var min = Math.round(state.get.current().processor.level / 8)

    var max = Math.round(state.get.current().processor.level * 2)

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

    report.render({
      type: "normal",
      message: ["!-- warning --!", amount + " toast matter consumed", "consumer unknown"],
      format: "normal"
    })
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
