var Generator = function(name, type, multiplier) {

  this.debug = function() {
    console.log("name:", this.name)
    console.log("type:", this.type)
    console.log("level:", state.get.current()[this.name].level)
    console.log("constant:", state.get.current()[this.name].cost.constant)
    console.log("difference:", state.get.current()[this.name].cost.difference)
    console.log("cost", this.cost(1))
    sequence.table({
      type: this.type,
      count: 150,
      constant: state.get.current()[this.name].cost.constant,
      difference: state.get.current()[this.name].cost.difference
    })
  }

  this.name = name

  this.type = type

  this.addLevel = function(amount) {
    state.get.current()[this.name].level = state.get.current()[this.name].level + amount
  }

  this.removeLevel = function(amount) {
    state.get.current()[this.name].level = state.get.current()[this.name].level - amount
  }

  this.cost = function(amount) {
    return cost.calculate({
      type: this.type,
      constant: state.get.current()[this.name].cost.constant,
      difference: state.get.current()[this.name].cost.difference,
      level: {
        current: state.get.current()[this.name].level,
        target: state.get.current()[this.name].level + amount
      }
    })
  }

  this.increaseCost = function(priceDetails) {
    state.get.current()[this.name].cost.toast = sequence[this.type].value({
      target: priceDetails.level.calculate.to + 1,
      constant: state.get.current()[this.name].cost.constant,
      difference: state.get.current()[this.name].cost.difference
    })
  }

  this.upgrade = function(amount) {
    var priceDetails = this.cost(amount)

    if (state.get.current().toast.inventory.current >= priceDetails.cost.total) {

      toast.consume(priceDetails.cost.total)

      this.addLevel(amount)

      this.increaseCost(priceDetails)

      report.render({
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current()[this.name].level,
          abbreviations: true
        }) + " " + this.name + " online"],
        format: "normal"
      })

    } else {

      report.render({
        type: "error",
        message: [suffix.add({
          number: priceDetails.cost.total
        }) + " toast matter needed"],
        format: "normal"
      })

    }
  }

  this.setToastperunit = function() {
    if ("toastperunit" in state.get.current()[this.name]) {
      state.get.current()[this.name].toastperunit = state.mod.formula.toastPerUnit(state.get.current()[this.name].unitmultiplier)
    }
  }

  this.setIntervalStarting = function() {
    if (state.get.current()[this.name].interval) {
      state.get.current()[this.name].interval.starting = state.mod.formula.interval(state.get.current()[this.name].unitmultiplier)
    }
  }

  this.setIntervalCurrent = function() {
    if (state.get.current()[this.name].interval) {
      state.get.current()[this.name].interval.current = state.get.current()[this.name].interval.starting - (state.get.current()[this.name].level * 500)
    }
  }

  this.setConstant = function() {
    state.get.current()[this.name].cost.constant = state.mod.formula.cost.constant(state.get.current()[this.name].unitmultiplier)

  }

  this.setDifference = function() {
    state.get.current()[this.name].cost.difference = state.mod.formula.cost.difference[this.type](state.get.current()[this.name].unitmultiplier)

  }

  this.setStartingCost = function() {
    state.get.current()[this.name].cost.toast = sequence[this.type].value({
      target: state.get.current()[this.name].level + 1,
      constant: state.get.current()[this.name].cost.constant,
      difference: state.get.current()[this.name].cost.difference
    })
  }

  this.setCardMeterDuration = function() {
    if (state.get.current()[this.name].interval) {
      helper.e("html").style.setProperty("--card-" + this.name + "-meter-duration", state.get.current()[this.name].interval.current + "ms")

      var parentUnitName = this.name.replace("speed", "")

      if (state.get.current()[parentUnitName].level > 0) {
        helper.e("[stage=" + parentUnitName + "]").classList.remove("active")
        void helper.e("[stage=" + parentUnitName + "]" + " .card-meter-progress").offsetWidth
        helper.e("[stage=" + parentUnitName + "]").classList.add("active")
      }
    }
  }

  this.setToastperunit()

  this.setIntervalStarting()

  this.setIntervalCurrent()

  this.setConstant()

  this.setDifference()

  this.setStartingCost()

  this.setCardMeterDuration()

}
