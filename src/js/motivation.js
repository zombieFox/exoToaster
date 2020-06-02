var motivation = (function() {

  var mod = {}

  mod.formula = {
    interval: function(speed) {
      return 100 + (speed * 100)
    }
  }

  mod.interval = {
    set: function() {
      state.get.current().motivation.interval = mod.formula.interval(state.get.current().motivation.speed)
    }
  }

  mod.level = {
    add: function(amount) {
      state.get.current().motivation.level = state.get.current().motivation.level + amount
    },
    remove: function(amount) {
      state.get.current().motivation.level = state.get.current().motivation.level - amount
    }
  }

  mod.speed = {
    add: function(amount) {
      state.get.current().motivation.speed = state.get.current().motivation.speed + amount
      mod.interval.set()
    },
    remove: function(amount) {
      state.get.current().motivation.speed = state.get.current().motivation.speed - amount
      mod.interval.set()
    }
  }

  mod.next = null

  mod.delayMotivation = null

  mod.boost = {
    count: function() {
      state.get.current().motivation.count = state.get.current().motivation.count + 1
    },
    add: function() {
      state.get.current().motivation.step = state.get.current().motivation.step + 1
      if (state.get.current().motivation.step == state.get.current().motivation.max) {
        state.get.current().motivation.running = true
        mod.boost.start()
        render.boost.success.start()
      }
      if (state.get.current().motivation.running) {
        mod.boost.max()
      }
      render.boost.meter()
      render.boost.button()
    },
    remove: function() {
      state.get.current().motivation.step = state.get.current().motivation.step - 1
      if (state.get.current().motivation.step == 0) {
        state.get.current().motivation.running = false
        mod.boost.end()
        render.boost.success.end()
      }
      if (state.get.current().motivation.running) {
        mod.boost.max()
      }
      render.boost.meter()
      render.boost.button()
    },
    max: function() {
      if (state.get.current().motivation.running) {
        mod.delayMotivation = setTimeout(mod.boost.remove, state.get.current().motivation.interval)
      } else {
        clearTimeout(mod.delayMotivation)
      }
    },
    start: function() {
      render.message()
      mod.boost.count()
      autotoaster.motivation.add(state.get.current().motivation.level)
      megatoaster.motivation.add(state.get.current().motivation.level)
      rockettoaster.motivation.add(state.get.current().motivation.level)
      sonictoaster.motivation.add(state.get.current().motivation.level)
      plasmatoaster.motivation.add(state.get.current().motivation.level)
      atomictoaster.motivation.add(state.get.current().motivation.level)
      quantumtoaster.motivation.add(state.get.current().motivation.level)
    },
    end: function() {
      autotoaster.motivation.remove(state.get.current().motivation.level)
      megatoaster.motivation.remove(state.get.current().motivation.level)
      rockettoaster.motivation.remove(state.get.current().motivation.level)
      sonictoaster.motivation.remove(state.get.current().motivation.level)
      plasmatoaster.motivation.remove(state.get.current().motivation.level)
      atomictoaster.motivation.remove(state.get.current().motivation.level)
      quantumtoaster.motivation.remove(state.get.current().motivation.level)
    },
    reset: function() {
      state.get.current().motivation.running = false
      state.get.current().motivation.step = 0
    }
  }

  var render = {}

  render.message = function(index) {
    var randomIndex = Math.round(Math.random() * (string.mod.motivation.messages.toast.length - 1))

    if (index && index <= (string.mod.motivation.messages.toast.length - 1) || index == 0) {
      randomIndex = index
    }

    report.render.message({
      type: "motivation",
      message: [string.mod.motivation.messages.toast[randomIndex]],
      format: "normal"
    })

    var interval = Math.round(Math.random() * 125000)

    // console.log("motivation in: " + Math.round(interval / 1000) + "s")

    clearInterval(mod.next)

    mod.next = setInterval(render.message, interval)
  }

  render.boost = {
    meter: function() {
      helper.e("html").style.setProperty("--card-motivation-meter-width", (state.get.current().motivation.step * 10) + "%")
    },
    button: function() {
      if (state.get.current().motivation.running) {
        helper.e("[control=motivation]").setAttribute("disabled", "")
      } else {
        helper.e("[control=motivation]").removeAttribute("disabled")
      }
    },
    success: {
      start: function() {
        report.render.message(string.mod.motivation.start)
      },
      end: function() {
        report.render.message(string.mod.motivation.end)
      }
    }
  }

  var boost = function() {
    mod.boost.add()
    render.boost.meter()
    render.boost.button()
  }

  var init = function() {
    mod.boost.reset()
    mod.interval.set()
  }

  return {
    mod: mod,
    render: render,
    boost: boost,
    init: init
  }

})()
