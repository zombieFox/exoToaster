var suffix = (function() {

  var add = function(override) {
    var options = {
      number: null,
      decimals: null
    }
    if (override) {
      options = helper.applyOptions(options, override)
    }

    if (options.decimals == null) {
      options.decimals = 2
    }

    var suffix = ""
    if (options.number > 999999999999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000000000000
      suffix = " sexdecillion"
      // suffix = " Sxd"
    } else if (options.number > 999999999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000000000
      suffix = " quindecillion"
      // suffix = " Qid"
    } else if (options.number > 999999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000000
      suffix = " quattuordecillion"
      // suffix = " Qad"
    } else if (options.number > 999999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000000
      suffix = " tredecillion"
      // suffix = " Td"
    } else if (options.number > 999999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000000
      suffix = " duodecillion"
      // suffix = " Dd"
    } else if (options.number > 999999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000000
      suffix = " undecillion"
      // suffix = " Ud"
    } else if (options.number > 999999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000000
      suffix = " decillion"
      // suffix = " Dc"
    } else if (options.number > 999999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000000
      suffix = " nonillion"
      // suffix = " No"
    } else if (options.number > 999999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000000
      suffix = " octillion"
      // suffix = " Oc"
    } else if (options.number > 999999999999999999999999) {
      options.number = options.number / 1000000000000000000000000
      suffix = " septillion"
      // suffix = " Sp"
    } else if (options.number > 999999999999999999999) {
      options.number = options.number / 1000000000000000000000
      suffix = " sextillion"
      // suffix = " Sx"
    } else if (options.number > 999999999999999999) {
      options.number = options.number / 1000000000000000000
      suffix = " quintillion"
      // suffix = " Qi"
    } else if (options.number > 999999999999999) {
      options.number = options.number / 1000000000000000
      suffix = " quadrillion"
      // suffix = " Qa"
    } else if (options.number > 999999999999) {
      options.number = options.number / 1000000000000
      suffix = " trillion"
      // suffix = " Tr"
    } else if (options.number > 999999999) {
      options.number = options.number / 1000000000
      suffix = " billion"
      // suffix = " Bi"
    } else if (options.number > 999999) {
      options.number = options.number / 1000000
      suffix = " million"
      // suffix = " Mi"
    } else if (options.number > 999) {
      options.number = options.number / 1000
      suffix = " thousand"
      // suffix = " K"
    } else if (options.number < 1000) {
      options.decimals = 0
    }

    var number = options.number.toFixed(options.decimals)

    if (number.indexOf(".") > -1) {
      if (number.split(".")[1] == "00") {
        number = number.split(".")[0]
      }
    }

    return number + suffix

  }

  return {
    add: add
  }

})()
