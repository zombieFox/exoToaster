var Generator = function(name, type) {

  this.debug = function() {
    console.log("generator:", this.name)
    console.log("type:", this.type)
    console.log("level:", this.getDataFromPath(this.path.level))
    console.log("constant:", this.getDataFromPath(this.path.constant))
    console.log("difference:", this.getDataFromPath(this.path.difference))
    console.log("cost", this.cost(1))
    console.log("path", this.path)
    sequence.table({
      type: this.type,
      count: 150,
      constant: this.getDataFromPath(this.path.constant),
      difference: this.getDataFromPath(this.path.difference)
    })
  }

  this.name = name

  this.type = type

  this.path = {
    level: this.name + ".level",
    constant: this.name + ".cost.constant",
    difference: this.name + ".cost.difference",
    cost: this.name + ".cost.toast",
    interval: this.name + ".interval.starting",
    currency: {
      toast: "toast.inventory.current"
    }
  }

  this.getDataFromPath = function(path) {
    return helper.getObject({
      object: state.get.current(),
      path: path
    })
  }

  this.addLevel = function(amount) {
    state.mod.set({
      path: this.path.level,
      value: this.getDataFromPath(this.path.level) + amount
    })
  }

  this.removeLevel = function(amount) {
    state.mod.set({
      path: this.path.level,
      value: this.getDataFromPath(this.path.level) - amount
    })
  }

  this.cost = function(amount) {
    return cost.calculate({
      type: this.type,
      constant: this.getDataFromPath(this.path.constant),
      difference: this.getDataFromPath(this.path.difference),
      level: {
        current: this.getDataFromPath(this.path.level),
        target: this.getDataFromPath(this.path.level) + amount
      }
    })
  }

  this.increaseCost = function(priceDetails) {
    var nextCost = sequence[this.type].value({
      target: priceDetails.level.calculate.to + 1,
      constant: this.getDataFromPath(this.path.constant),
      difference: this.getDataFromPath(this.path.difference)
    })
    // console.log(this.name, "next level cost", nextCost)
    state.set({
      path: this.path.cost,
      value: nextCost
    })
  }

  this.upgrade = function(amount) {
    var priceDetails = this.cost(amount)

    // console.log("price details", priceDetails)
    // console.log("try to upgrade", this.name, "by", amount)
    // console.log("toast", this.getDataFromPath(this.path.currency.toast), " | cost", priceDetails.cost.total)

    if (this.getDataFromPath(this.path.currency.toast) >= priceDetails.cost.total) {

      // console.log(this.name, "upgrade success")
      toast.consume(priceDetails.cost.total)
      // console.log("toast consumed", priceDetails.cost.total)
      this.addLevel(amount)
      // console.log(this.name, "upgrade by", amount)
      this.increaseCost(priceDetails)
      report.render({
        type: "success",
        message: ["+" + suffix.add({
          number: amount
        }) + " unit, " + suffix.add({
          number: this.getDataFromPath(this.path.level)
        }) + " " + this.name + " online"],
        format: "normal"
      })

    } else {

      // console.log(this.name, "upgrade fail")
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
      target: this.getDataFromPath(this.path.level) + 1,
      constant: this.getDataFromPath(this.path.constant),
      difference: this.getDataFromPath(this.path.difference)
    })

    var path = this.path.cost

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

        if (!data.getDataFromPath(data.path.interval) == "") {
          helper.e("html").style.setProperty("--card-" + data.name + "-meter-duration", (data.getDataFromPath(data.path.interval) - (data.getDataFromPath(data.path.level) * 100)) + "ms")

          var mainGeneratorLevel = data.getDataFromPath(data.name.replace("speed", "") + ".level")

          if (mainGeneratorLevel > 0) {
            helper.e(".card-" + data.name.replace("speed", "")).classList.remove("active")
            void helper.e(".card-" + data.name.replace("speed", "") + " .card-meter-progress").offsetWidth
            helper.e(".card-" + data.name.replace("speed", "")).classList.add("active")
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
