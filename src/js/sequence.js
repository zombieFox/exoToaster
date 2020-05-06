var sequence = (function() {

  // n   = nth/index
  // a   = term/value of given nth/index
  // a_1 = constant/first value of sequence
  // a_n = nth term
  // d   = difference between two terms
  // c   = constant or starting value
  // a_x = the term at nth/index x
  // a_y = the term at nth/index y

  var arithmetic = {}

  arithmetic.value = function(override) {
    var options = {
      target: null, // index of the desiered value
      constant: null, // c
      difference: null // d
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    // a_n
    var valueOfNth = options.constant + (options.difference * (options.target - 1))

    return valueOfNth
  }

  arithmetic.sum = function(override) {
    var options = {
      constant: null, // c
      difference: null, // d
      indexX: null, // a_x
      indexY: null // a_y
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    // a_x
    var valueOfX = arithmetic.value({
      target: options.indexX,
      constant: options.constant,
      difference: options.difference
    })

    // a_y
    var valueOfY = arithmetic.value({
      target: options.indexY,
      constant: options.constant,
      difference: options.difference
    })

    // sum from a_x to a_y
    var sumFromXtoY = (((options.indexY + 1) - options.indexX) * (valueOfX + valueOfY)) / 2

    return sumFromXtoY
  }

  var geometric = {}

  geometric.value = function(override) {
    var options = {
      target: null, // index of the desiered value
      constant: null, // c
      difference: null // d
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    // a_n
    var valueOfNth = options.constant * (Math.pow(options.difference, (options.target - 1)))

    valueOfNth = Math.round(valueOfNth)

    return valueOfNth
  }

  geometric.sum = function(override) {
    var options = {
      constant: null, // c
      difference: null, // d
      indexX: null, // a_x
      indexY: null // a_y
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    // a_x
    var valueOfX = geometric.value({
      target: options.indexX,
      constant: options.constant,
      difference: options.difference
    })

    // sf
    var scaleFactor = options.constant * (Math.pow(options.difference, (options.indexX - 1))) / Math.pow(options.difference, options.indexX)

    // sum from a_x to a_y
    var sumFromXtoY = ((scaleFactor * Math.pow(options.difference, options.indexX)) * (1 - Math.pow(options.difference, options.indexY + 1 - options.indexX))) / (1 - options.difference)

    sumFromXtoY = Math.round(sumFromXtoY)

    return sumFromXtoY
  }

  var table = function(override) {
    var options = {
      type: null, // arithmetic | geometric
      count: null, // length of sequence
      constant: null, // c
      difference: null // d
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var arrayOfSequence = []

    for (var i = 1; i <= options.count; i++) {
      arrayOfSequence.push({
        level: i,
        cost: sequence[options.type].value({
          target: i,
          constant: options.constant,
          difference: options.difference
        }),
        sum: sequence[options.type].sum({
          constant: options.constant,
          difference: options.difference,
          indexX: 1,
          indexY: i
        })
      })
    }

    console.table(options);
    console.table(arrayOfSequence);
  }

  var init = function() {
    // table({
    //   type: "geometric",
    //   count: 20,
    //   constant: state.get.current().processor.cost.constant,
    //   difference: state.get.current().processor.cost.difference
    // })
    // table({
    //   type: "arithmetic",
    //   count: 20,
    //   constant: state.get.current().autotoasters.cost.constant,
    //   difference: state.get.current().autotoasters.cost.difference
    // })
  }

  return {
    arithmetic: arithmetic,
    geometric: geometric,
    table: table,
    init: init
  }

})()
