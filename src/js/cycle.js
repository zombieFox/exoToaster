var cycle = (function() {

  var mod = {}

  mod.add = function(amount) {
    if (state.get.current().cycle.current + amount <= state.get.current().cycle.max) {
      state.mod.set({
        path: "cycle.current",
        value: state.get.current().cycle.current + amount
      })
    }
  }

  mod.remove = function(amount) {
    state.mod.set({
      path: "cycle.current",
      value: state.get.current().cycle.current - amount
    })
    if (state.get.current().cycle.current < 0) {
      state.mod.set({
        path: "cycle.current",
        value: 0
      })
    }
  }

  mod.max = function() {
    state.set({
      path: "cycle.max",
      value: state.get.current().processor.level * 2
    })
  }

  mod.interval = {
    set: function() {
      state.set({
        path: "cycle.interval.current",
        value: state.get.current().cycle.interval.starting - (state.get.current().processor.level * 100)
      })
      if (state.get.current().cycle.interval.current < state.get.current().cycle.interval.min) {
        state.mod.set({
          path: "cycle.interval.current",
          value: state.get.current().cycle.interval.min
        })
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

  var render = {}

  var init = function() {
    mod.interval.set()
    mod.interval.animation()
    mod.max()
  }

  return {
    mod: mod,
    render: render,
    init: init
  }

})()
