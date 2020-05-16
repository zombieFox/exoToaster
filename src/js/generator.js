var Generator = function(name, type) {

  this.debug = function() {
    console.log("name:", this.name)
    console.log("type:", this.type)
    console.log("level:", this.getDataFromPath(this.name + ".level"))
    console.log("constant:", this.getDataFromPath(this.name + "cost.constant"))
    console.log("difference:", this.getDataFromPath(this.name + "cost.difference"))
    console.log("cost", this.cost(1))
    sequence.table({
      type: this.type,
      count: 150,
      constant: this.getDataFromPath(this.name + ".cost.constant"),
      difference: this.getDataFromPath(this.name + ".cost.difference")
    })
  }

  this.name = name

  this.type = type

  this.getDataFromPath = function(path) {
    return helper.getObject({
      object: state.get.current(),
      path: path
    })
  }

  this.addLevel = function(amount) {
    state.mod.set({
      path: this.name + ".level",
      value: this.getDataFromPath(this.name + ".level") + amount
    })
  }

  this.removeLevel = function(amount) {
    state.mod.set({
      path: this.name + ".level",
      value: this.getDataFromPath(this.name + ".level") - amount
    })
  }

  this.cost = function(amount) {
    return cost.calculate({
      type: this.type,
      constant: this.getDataFromPath(this.name + ".cost.constant"),
      difference: this.getDataFromPath(this.name + ".cost.difference"),
      level: {
        current: this.getDataFromPath(this.name + ".level"),
        target: this.getDataFromPath(this.name + ".level") + amount
      }
    })
  }

  this.increaseCost = function(priceDetails) {
    var nextCost = sequence[this.type].value({
      target: priceDetails.level.calculate.to + 1,
      constant: this.getDataFromPath(this.name + ".cost.constant"),
      difference: this.getDataFromPath(this.name + ".cost.difference")
    })

    state.set({
      path: this.name + ".cost.toast",
      value: nextCost
    })
  }

  this.setInterval = function() {
    if ("interval" in this.getDataFromPath(this.name)) {

      state.mod.set({
        path: this.name + ".interval.current",
        value: this.getDataFromPath(this.name + ".interval.starting") - (this.getDataFromPath(this.name + ".level") * 500)
      })

    }
  }

  this.setInterval()

  this.upgrade = function(amount) {
    var priceDetails = this.cost(amount)

    if (state.get.current().toast.inventory.current >= priceDetails.cost.total) {

      toast.consume(priceDetails.cost.total)
      this.addLevel(amount)
      this.increaseCost(priceDetails)
      report.render({
        type: "success",
        message: ["+" + suffix.add({
          number: amount
        }) + " unit, " + suffix.add({
          number: this.getDataFromPath(this.name + ".level")
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

  this.startingCost = function() {
    var cost = sequence[this.type].value({
      target: this.getDataFromPath(this.name + ".level") + 1,
      constant: this.getDataFromPath(this.name + ".cost.constant"),
      difference: this.getDataFromPath(this.name + ".cost.difference")
    })

    var path = this.name + ".cost.toast"

    state.set({
      path: path,
      value: cost
    })
  }

  this.startingCost()

  this.render = {}

  this.render.card = {
    animation: {
      interval: function(data) {

        if ("interval" in data.getDataFromPath(data.name)) {
          helper.e("html").style.setProperty("--card-" + data.name + "-meter-duration", data.getDataFromPath(data.name + ".interval.current") + "ms")

          var mainGeneratorLevel = data.getDataFromPath(data.name.replace("speed", "") + ".level")

          if (mainGeneratorLevel > 0) {
            helper.e("[stage=" + data.name.replace("speed", "") + "]").classList.remove("active")
            void helper.e("[stage=" + data.name.replace("speed", "") + "]" + " .card-meter-progress").offsetWidth
            helper.e("[stage=" + data.name.replace("speed", "") + "]").classList.add("active")
          }
        }

      }
    }
  }

  this.render.card.animation.interval(this)

  this.cardAnimationInterval = function() {
    var data = this
    data.render.card.animation.interval(data)
  }

}
