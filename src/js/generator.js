var Generator = function(name, type) {

  this.debug = function() {
    console.log("generator:", this.name)
    console.log("type:", this.type)
    console.log("level:", this.getDataFromPath(this.path.level))
    console.log("constant:", this.getDataFromPath(this.path.constant))
    console.log("difference:", this.getDataFromPath(this.path.difference))
    console.log("cost", this.cost(1))
    console.log("path", this.path)
  }

  this.name = name

  this.type = type

  this.path = {
    level: this.name + ".level",
    constant: this.name + ".cost.constant",
    difference: this.name + ".cost.difference",
    cost: this.name + ".cost.toast",
    currency: {
      toast: "toast.inventory.current",
      cycles: "cycles.current"
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

  this.upgrade = function(amount, func) {
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
      if (func) {
        func()
      }
      report.render({
        type: "success",
        message: ["+" + suffix.add({
          number: amount
        }) + " " + this.name + " added", suffix.add({
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

  // set the starting cost for this building
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

}
