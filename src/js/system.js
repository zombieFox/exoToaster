var System = function(name, type, multiplier) {

  this.debug = function() {
    console.log("name:", this.name)
    console.log("type:", this.type)
    console.log("level:", this.state().level)
    console.log("constant:", this.state().cost.constant)
    console.log("difference:", this.state().cost.difference)
    console.log("cost", this.cost.get(1))
    sequence.table({
      type: this.type,
      count: 150,
      constant: this.state().cost.constant,
      difference: this.state().cost.difference
    })
  }

  this.formula = {
    cost: {
      constant: function(multiplier) {
        return multiplier * 4
      },
      difference: {
        arithmetic: function(multiplier) {
          return (multiplier * 2) * 4
        },
        geometric: function(multiplier) {
          return (multiplier / 10) + 1
        }
      }
    }
  }

  // state
  this.state = function() {
    return state.get.current()[this.name]
  }

  // basics
  this.name = name

  this.type = type

  // set starting values
  this.state().level = 1

  this.state().cost.constant = this.formula.cost.constant(multiplier)

  this.state().cost.difference = this.formula.cost.difference[this.type](multiplier)

  this.state().cost.toast = sequence[this.type].value({
    target: this.state().level + 1,
    constant: this.state().cost.constant,
    difference: this.state().cost.difference
  })

  // add
  this.add = function(amount) {
    var priceDetails = this.cost.get(amount)
    if (state.get.current().toast.inventory.current >= priceDetails.cost.total) {
      toast.consume(priceDetails.cost.total)
      this.level.add(amount)
      this.cost.increase(priceDetails)
      report.render(string.mod[this.name].success(amount))
    } else {
      report.render(string.mod[this.name].fail(priceDetails.cost.total))
    }
  }

  // level
  this.level = {
    add: null,
    remove: null
  }

  this.level.add = function(amount) {
    this.state().level = this.state().level + amount
  }.bind(this)

  this.level.remove = function(amount) {
    this.state().level = this.state().level - amount
  }.bind(this)

  // cost
  this.cost = {
    get: null,
    increase: null
  }

  this.cost.get = function(amount) {
    return cost.calculate({
      type: this.type,
      constant: this.state().cost.constant,
      difference: this.state().cost.difference,
      level: {
        current: this.state().level,
        target: this.state().level + amount
      }
    })
  }.bind(this)

  this.cost.increase = function(priceDetails) {
    this.state().cost.toast = sequence[this.type].value({
      target: priceDetails.level.calculate.to + 1,
      constant: this.state().cost.constant,
      difference: this.state().cost.difference
    })
  }.bind(this)

}
