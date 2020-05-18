var suffix = (function() {

  var add = function(override) {
    var options = {
      number: null,
      abbreviations: null,
      decimals: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var suffix = ""

    if (options.number > 999999999999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Sxd"
      } else {
        suffix = "sexdecillion"
      }

    } else if (options.number > 999999999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Qid"
      } else {
        suffix = "quindecillion"
      }

    } else if (options.number > 999999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Qad"
      } else {
        suffix = "quattuordecillion"
      }

    } else if (options.number > 999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Td"
      } else {
        suffix = "tredecillion"
      }

    } else if (options.number > 999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Dd"
      } else {
        suffix = "duodecillion"
      }

    } else if (options.number > 999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Ud"
      } else {
        suffix = "undecillion"
      }

    } else if (options.number > 999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Dc"
      } else {
        suffix = "decillion"
      }

    } else if (options.number > 999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000

      if (options.abbreviations) {
        suffix = "No"
      } else {
        suffix = "nonillion"
      }

    } else if (options.number > 999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000

      if (options.abbreviations) {
        suffix = "Oc"
      } else {
        suffix = "octillion"
      }

    } else if (options.number > 999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000

      if (options.abbreviations) {
        suffix = "Sp"
      } else {
        suffix = "septillion"
      }

    } else if (options.number > 999999999999999999999) {
      options.number = options.number / 1000000000000000000000

      if (options.abbreviations) {
        suffix = "Sx"
      } else {
        suffix = "sextillion"
      }

    } else if (options.number > 999999999999999999) {
      options.number = options.number / 1000000000000000000

      if (options.abbreviations) {
        suffix = "Qi"
      } else {
        suffix = "quintillion"
      }

    } else if (options.number > 999999999999999) {
      options.number = options.number / 1000000000000000

      if (options.abbreviations) {
        suffix = "Qa"
      } else {
        suffix = "quadrillion"
      }

    } else if (options.number > 999999999999) {
      options.number = options.number / 1000000000000

      if (options.abbreviations) {
        suffix = "Tr"
      } else {
        suffix = "trillion"
      }

    } else if (options.number > 999999999) {
      options.number = options.number / 1000000000

      if (options.abbreviations) {
        suffix = "Bi"
      } else {
        suffix = "billion"
      }

    } else if (options.number > 999999) {
      options.number = options.number / 1000000

      if (options.abbreviations) {
        suffix = "Mi"
      } else {
        suffix = "million"
      }

    } else if (options.number > 999) {
      options.number = options.number / 1000

      if (options.abbreviations) {
        suffix = "K"
      } else {
        suffix = "thousand"
      }

    }

    if (options.decimals == null) {
      options.decimals = 2
    }

    if (options.number < 1000) {
      options.decimals = 2
    }

    var number = options.number.toFixed(options.decimals)

    if (number.indexOf(".") > -1) {
      if (number.split(".")[1] == "00") {
        number = number.split(".")[0]
      }
    }

    return number + " " + suffix

  }

  return {
    add: add
  }

})()
