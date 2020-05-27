var Generator = function(name, type, multiplier) {

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
    toastperunit: function(number) {
      return Math.pow(number, 2)
    },
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
    },
    interval: function(speed, multiplier) {
      var allIntervals = function(lower, upper, steps) {
        var difference = upper - lower
        var increment = difference / (steps - 1)
        var results = [lower, ...Array(steps - 2).fill("").map(
          function(item, index) {
            return Math.round(lower + (increment * (index + 1)))
          }), upper]
        return results.reverse()
      }

      return allIntervals(1000, (multiplier * 4) * 1000, 8)[speed]
    }
  }

  // state
  this.state = function() {
    return state.get.current()[this.name]
  }

  // basics
  this.name = name

  this.type = type

  this.multiplier = multiplier

  // set
  this.set = {}

  this.set.startingvalues = function() {

    this.state().level = 0

    this.state().toastperunit = this.formula.toastperunit(this.multiplier)

    this.state().efficiency = 1

    this.state().motivation = 1

    this.state().milestone.efficiency = 50

    this.state().speed = 0

    this.state().interval = this.get.interval()

    this.state().output.unit = this.get.output.unit()

    this.state().output.total = this.get.output.total()

    this.state().output.persec = this.get.output.persec()

    this.state().cost.constant = this.formula.cost.constant(this.multiplier)

    this.state().cost.difference = this.formula.cost.difference[this.type](this.multiplier)

    this.state().cost.toast = sequence[this.type].value({
      target: this.state().level + 1,
      constant: this.state().cost.constant,
      difference: this.state().cost.difference
    })

  }.bind(this)

  this.set.interval = function() {
    this.state().interval = this.get.interval()
  }.bind(this)

  this.set.output = function() {

    this.state().output.unit = this.get.output.unit()

    this.state().output.total = this.get.output.total()

    this.state().output.persec = this.get.output.persec()

  }.bind(this)

  // get
  this.get = {
    output: {
      unit: null,
      total: null,
      persec: null
    },
    interval: null
  }

  this.get.output.unit = function() {
    return (this.state().toastperunit * this.state().efficiency) * this.state().motivation
  }.bind(this)

  this.get.output.total = function() {
    return this.get.output.unit() * this.state().level
  }.bind(this)

  this.get.output.persec = function() {
    return this.get.output.total() / (this.state().interval / 1000)
  }.bind(this)

  this.get.interval = function() {
    return this.formula.interval(this.state().speed, this.multiplier)
  }.bind(this)

  // add
  this.add = function(amount) {
    var priceDetails = this.cost.get(amount)
    if (state.get.current().toast.inventory.current >= priceDetails.cost.total) {
      toast.consume(priceDetails.cost.total)
      this.level.add(amount)
      this.cost.increase(priceDetails)
      report.render(string.mod[this.name].success(amount))
      this.set.output()
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
    this.set.output()
  }.bind(this)

  this.level.remove = function(amount) {
    this.state().level = this.state().level - amount
    this.set.output()
  }.bind(this)

  // efficiency
  this.efficiency = {
    add: null,
    remove: null,
    reset: null
  }

  this.efficiency.add = function(amount) {
    this.state().efficiency = this.state().efficiency + amount
    this.set.output()
  }.bind(this)

  this.efficiency.remove = function(amount) {
    this.state().efficiency = this.state().efficiency - amount
    if (this.state().efficiency < 1) {
      this.state().efficiency = 1
    }
    this.set.output()
  }.bind(this)

  this.efficiency.reset = function() {
    this.state().efficiency = 1
    this.set.output()
  }.bind(this)

  // motivation
  this.motivation = {
    add: null,
    remove: null,
    reset: null
  }

  this.motivation.add = function(amount) {
    this.state().motivation = this.state().motivation + amount
    this.set.output()
  }.bind(this)

  this.motivation.remove = function(amount) {
    this.state().motivation = this.state().motivation - amount
    if (this.state().motivation < 1) {
      this.state().motivation = 1
    }
    this.set.output()
  }.bind(this)

  this.motivation.reset = function() {
    this.state().motivation = 1
    this.set.output()
  }.bind(this)

  // speed
  this.speed = {
    add: null,
    remove: null,
    reset: null
  }

  this.speed.add = function(amount) {
    if (amount > 9) {
      amount = 9
    }
    this.state().speed = this.state().speed + amount
    this.set.interval()
  }.bind(this)

  this.speed.remove = function(amount) {
    this.state().speed = this.state().speed - amount
    if (this.state().speed < 0) {
      this.state().speed = 0
    }
    this.set.interval()
  }.bind(this)

  this.speed.reset = function() {
    this.state().speed = 0
    this.set.interval()
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

  // render
  this.render = {
    interval: null
  }

  this.render.interval = function() {
    helper.e("html").style.setProperty("--card-" + this.name + "-interval", this.state().interval + "ms")
    if (this.state().level > 0) {
      helper.e("[stage=" + this.name + "]").classList.remove("active")
      void helper.e("[stage=" + this.name + "]" + " .card-meter-progress").offsetWidth
      helper.e("[stage=" + this.name + "]").classList.add("active")
    }
  }.bind(this)

  this.set.startingvalues()

  this.render.interval()

}
