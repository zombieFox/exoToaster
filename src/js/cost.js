var cost = (function() {

  var calculate = function(override) {
    var options = {
      type: null, // arithmetic | geometric
      constant: null, // the starting cost
      difference: null, // inflation amount per nth/index term
      level: {
        current: null, // starting nth/index aka n_x
        target: null // target nth/index aka n_y
      }
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    options.level.calculate = {
      from: options.level.current + 1, // set n_x a level higher than current level
      to: options.level.target
    }

    options.cost = {}

    options.cost.total = sequence[options.type].sum({
      constant: options.constant,
      difference: options.difference,
      indexX: options.level.calculate.from,
      indexY: options.level.calculate.to
    })

    return options
  }

  return {
    calculate: calculate
  }

})()
