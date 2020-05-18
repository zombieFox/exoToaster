var cycle = (function() {

  var mod = {}

  mod.add = function(amount) {
    if (state.get.current().cycle.current + amount <= state.get.current().cycle.max) {
      state.get.current().cycle.current = state.get.current().cycle.current + amount
    } else {
      state.get.current().cycle.current = state.get.current().cycle.max
    }
  }

  mod.remove = function(amount) {
    state.get.current().cycle.current = state.get.current().cycle.current - amount

    if (state.get.current().cycle.current < 0) {
      state.get.current().cycle.current = 0
    }
  }

  mod.max = function() {
    state.get.current().cycle.max = state.get.current().processor.level * 2
  }

  mod.interval = {
    set: function() {
      state.get.current().cycle.interval.current = state.get.current().cycle.interval.starting - (state.get.current().processor.level * 100)

      if (state.get.current().cycle.interval.current < state.get.current().cycle.interval.min) {
        state.get.current().cycle.interval.current = state.get.current().cycle.interval.min
      }
    },
    animation: function() {
      if (state.get.current().cycle.current != state.get.current().cycle.max) {
        helper.e("html").style.setProperty("--card-cycle-meter-duration", state.get.current().cycle.interval.current + "ms")
        helper.e("[stage=cycle]").classList.remove("active")
        void helper.e("[stage=cycle] .card-meter-progress").offsetWidth
        helper.e("[stage=cycle]").classList.add("active")
      }
    }
  }

  var make = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.add(amount)
    }
  }

  var consume = function(amount) {
    if (amount != null && amount != undefined && typeof amount == "number") {
      mod.remove(amount)
    }
  }

  var max = function() {
    mod.max()
  }

  var init = function() {
    mod.interval.set()
    mod.max()
  }

  return {
    mod: mod,
    make: make,
    consume: consume,
    max: max,
    init: init
  }

})()
