var helper = (function() {

  var e = function(selector) {
    return document.querySelector(selector)
  }

  var eA = function(selector) {
    return document.querySelectorAll(selector)
  }

  var applyOptions = function(options, override) {
    if (options && override) {
      if (override) {
        for (var key in override) {
          if (key in options) {
            options[key] = override[key]
          }
        }
      }
      return options
    } else {
      return null
    }
  }

  var _makeAddress = function(path) {
    var array
    if (path.indexOf("[") != -1 && path.indexOf("]") != -1) {
      array = path.split(".").join(",").split("[").join(",").split("]").join(",").split(",")
      for (var i = 0; i < array.length; i++) {
        if (array[i] == "") {
          array.splice(i, 1)
        }
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10)
        }
      }
    } else {
      array = path.split(".")
    }
    return array
  }

  var setObject = function(override) {
    var options = {
      path: null,
      object: null,
      newValue: null
    }
    if (override) {
      var options = applyOptions(options, override)
    }
    var address = _makeAddress(options.path)
    var _setData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift()
        // if the key is not found make a new object
        if (!(currentKey in options.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            options.object[currentKey] = {}
          } else {
            options.object[currentKey] = []
          }
        }
        // drill down the object with the first key
        options.object = options.object[currentKey]
      }
      var finalKey = address.shift()
      options.object[finalKey] = options.newValue
    }
    if (options.object != null && options.path != null && options.newValue != null) {
      _setData()
    } else {
      return false
    }
  }

  var getObject = function(override) {
    var options = {
      object: null,
      path: null
    }
    if (override) {
      var options = applyOptions(options, override)
    }
    var address = _makeAddress(options.path)
    var _getData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift()
        // if the key is not found make a new object
        if (!(currentKey in options.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            options.object[currentKey] = {}
          } else {
            options.object[currentKey] = []
          }
        }
        // drill down the object with the first key
        options.object = options.object[currentKey]
      }
      var finalKey = address.shift()
      if (!(finalKey in options.object)) {
        return ""
      } else {
        return options.object[finalKey]
      }
    }
    if (options.object != null && options.path != null) {
      return _getData()
    } else {
      return false
    }
  }

  var sortObject = function(object, key) {
    object.sort(function(a, b) {
      var textA = a[key]
      var textB = b[key]
      if (textA < textB) {
        return -1
      } else if (textA > textB) {
        return 1
      } else {
        return 0
      }
    })
    return object
  }

  var numberSuffix = function(override) {
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

  var timestamp = function() {
    var dateStamp = new Date()
    var object = {
      string: dateStamp.constructor(),
      time: dateStamp.getTime(),
      date: dateStamp.getDate(),
      day: dateStamp.getDay(),
      year: dateStamp.getFullYear(),
      hours: dateStamp.getHours(),
      milliseconds: dateStamp.getMilliseconds(),
      minutes: dateStamp.getMinutes(),
      month: dateStamp.getMonth(),
      seconds: dateStamp.getSeconds()
    }
    return object
  }

  var convertColor = {
    rgb: {},
    hsl: {},
    hex: {}
  }

  convertColor.rgb.hsl = function(rgb) {
    var r = rgb.r / 255
    var g = rgb.g / 255
    var b = rgb.b / 255
    var min = Math.min(r, g, b)
    var max = Math.max(r, g, b)
    var delta = max - min
    var h
    var s

    if (max === min) {
      h = 0
    } else if (r === max) {
      h = (g - b) / delta
    } else if (g === max) {
      h = 2 + (b - r) / delta
    } else if (b === max) {
      h = 4 + (r - g) / delta
    }

    h = Math.min(h * 60, 360)

    if (h < 0) {
      h += 360
    }

    var l = (min + max) / 2

    if (max === min) {
      s = 0
    } else if (l <= 0.5) {
      s = delta / (max + min)
    } else {
      s = delta / (2 - max - min)
    }

    return {
      h: h,
      s: s * 100,
      l: l * 100
    }
  }

  convertColor.rgb.hex = function(args) {
    var integer = ((Math.round(args.r) & 0xFF) << 16) +
      ((Math.round(args.g) & 0xFF) << 8) +
      (Math.round(args.b) & 0xFF)

    var string = integer.toString(16)
    return "#" + "000000".substring(string.length) + string
  }

  convertColor.hsl.rgb = function(hsl) {
    var h = hsl.h / 360
    var s = hsl.s / 100
    var l = hsl.l / 100
    var t2
    var t3
    var val

    if (s === 0) {
      val = l * 255
      return {
        r: val,
        g: val,
        b: val
      }
    }

    if (l < 0.5) {
      t2 = l * (1 + s)
    } else {
      t2 = l + s - l * s
    }

    var t1 = 2 * l - t2

    var rgb = [0, 0, 0]
    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1)
      if (t3 < 0) {
        t3++
      }

      if (t3 > 1) {
        t3--
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3
      } else if (2 * t3 < 1) {
        val = t2
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
      } else {
        val = t1
      }

      rgb[i] = val * 255
    }

    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    }
  }

  convertColor.hex.rgb = function(args) {
    var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
    if (!match) {
      return {
        r: 0,
        g: 0,
        b: 0
      }
    }

    var colorString = match[0]

    if (match[0].length === 3) {
      colorString = colorString.split("").map(function(char) {
        return char + char
      }).join("")
    }

    var integer = parseInt(colorString, 16)
    var r = (integer >> 16) & 0xFF
    var g = (integer >> 8) & 0xFF
    var b = integer & 0xFF

    return {
      r: r,
      g: g,
      b: b
    }
  }

  var makeNode = function(override) {
    var options = {
      tag: null,
      text: null,
      attr: null
    }
    if (override) {
      options = applyOptions(options, override)
    }
    var element = document.createElement(options.tag)
    if (options.text != null) {
      element.textContent = options.text
    }
    if (options.attr != null) {
      options.attr.forEach(function(arrayItem, index) {
        if ("key" in arrayItem && "value" in arrayItem) {
          element.setAttribute(arrayItem.key, arrayItem.value)
        } else if ("key" in arrayItem) {
          element.setAttribute(arrayItem.key, "")
        }
      })
    }
    return element
  }

  var node = function(string, node) {
    // set element
    var tag
    if (string.indexOf("|") > 0) {
      tag = string.slice(0, string.indexOf("|"))
    } else {
      tag = string
    }
    var text = false
    if (tag.indexOf(":") > 0) {
      var pair = tag.split(":")
      tag = pair[0]
      text = pair[1]
    }
    var element = document.createElement(tag)
    if (text && text != "") {
      element.textContent = text
    }
    var attributes = string.slice(string.indexOf("|") + 1, string.length).split(",")
    // set attributes
    if (string.indexOf("|") > 0 && string.indexOf("|") < string.length - 1) {
      attributes.forEach(function(arrayItem, index) {
        if (arrayItem.indexOf(":") > 0) {
          // if key and value
          var pair = arrayItem.substring(0, arrayItem.indexOf(":")) + "," + arrayItem.substring((arrayItem.indexOf(":") + 1), arrayItem.length)
          pair = pair.split(",")
          attributes[index] = {
            key: pair[0],
            value: pair[1]
          }
        } else {
          // if key only
          attributes[index] = {
            key: arrayItem,
            value: undefined
          }
        }
      })
      attributes.forEach(function(arrayItem, index) {
        if (("key" in arrayItem && arrayItem.key != undefined) && ("value" in arrayItem && arrayItem.value != undefined)) {
          element.setAttribute(arrayItem.key, arrayItem.value)
        } else if ("key" in arrayItem && arrayItem.key != undefined) {
          element.setAttribute(arrayItem.key, "")
        }
      })
    }
    if (node) {
      element.appendChild(node)
    }
    return element
  }

  return {
    e: e,
    eA: eA,
    applyOptions: applyOptions,
    setObject: setObject,
    getObject: getObject,
    sortObject: sortObject,
    numberSuffix: numberSuffix,
    timestamp: timestamp,
    convertColor: convertColor,
    makeNode: makeNode,
    node: node
  }

})()
