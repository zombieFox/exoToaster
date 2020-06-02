var report = (function() {

  var mod = {}

  mod.cursor = {
    success: "*",
    normal: "#",
    error: "!",
    system: "/",
    motivation: "_"
  }

  mod.prefix = {
    success: function() {
      return "!!!"
    },
    normal: function() {
      return ":::"
    },
    error: function() {
      return "ERR"
    },
    system: function() {
      return "///"
    },
    motivation: function() {
      var eyes = ["~", "-", "^", "*", "=", "x", "¬", "¯", "×", "•", "—", "Y", "O", "o", "V", "v", "M", "m", "U", "u", "8", "0", "+", "■", "◆", "●"]
      var mouths = ["_", ".", "▁", "◡", "w"]
      var sides = [{
        left: "[",
        right: "]"
      }, {
        left: "(",
        right: ")"
      }, {
        left: "{",
        right: "}"
      }, {
        left: "<",
        right: ">"
      }, {
        left: "|",
        right: "|"
      }, {
        left: "=",
        right: "="
      }, {
        left: ":",
        right: ":"
      }]
      var randomBracket = sides[Math.round(Math.random() * (sides.length - 1))]
      var randomEyes = eyes[Math.round(Math.random() * (eyes.length - 1))]
      var randomMouth = mouths[Math.round(Math.random() * (mouths.length - 1))]
      return randomBracket.left + randomEyes + randomMouth + randomEyes + randomBracket.right
    }
  }

  var render = {}

  render.typeWriter = function(override) {
    var options = {
      text: null,
      index: null,
      target: null,
      delay: null,
      callback: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    if (options.index <= options.text.length) {
      options.target.innerHTML = options.text.substring(0, options.index + 1)
      render.scrollToBottom()
      var delay
      if (options.delay != null) {
        delay = options.delay
      } else {
        delay = 10
      }

      setTimeout(function() {
        render.typeWriter({
          text: options.text,
          index: options.index + 1,
          target: options.target,
          delay: options.delay,
          callback: options.callback
        })
      }, delay)
    } else {
      if (options.callback != null) {
        options.callback()
      }
    }
  }

  render.startTypeWriter = function(override) {
    var options = {
      textArray: null,
      index: null,
      target: null,
      delay: null,
      cursor: null,
      callback: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    options.textArray.forEach(function(arrayItem, index) {
      var item = helper.node("span|class:report-message-text-item")
      var string = helper.node("span|class:report-message-text-string")
      var cursor = helper.node("span|class:report-message-text-cursor")
      cursor.textContent = options.cursor
      item.appendChild(string)
      item.appendChild(cursor)
      options.target.appendChild(item)
      render.typeWriter({
        text: arrayItem,
        index: 1,
        target: string,
        delay: options.delay,
        callback: options.callback
      })
    })
  }

  render.message = function(override) {
    var options = {
      type: null,
      noprefix: null,
      message: null,
      delay: null,
      format: null,
      callback: null
    }

    if (override) {
      options = helper.applyOptions(options, override)
    }

    var maxMessages = state.get.current().report.message.max
    var report = helper.e(".report")
    var newMessage = helper.node("pre|class:report-message report-message-color-" + options.type)
    var format = {
      normal: function() {
        newMessage.classList.add("report-message-normal")
      },
      pre: function() {
        newMessage.classList.add("report-message-pre")
      }
    }
    format[options.format]()
    var messageType = helper.node("span|class:report-message-type")
    if (!options.noprefix) {
      messageType.textContent = mod.prefix[options.type]()
    }
    var messageText = helper.node("span|class:report-message-text")
    newMessage.appendChild(messageType)
    newMessage.appendChild(messageText)
    while (report.childNodes.length >= maxMessages) {
      report.firstChild.remove()
    }

    report.appendChild(newMessage)

    render.startTypeWriter({
      textArray: options.message,
      index: 0,
      delay: options.delay,
      target: messageText,
      cursor: mod.cursor[options.type],
      callback: options.callback
    })
  }

  render.clear = function() {
    var report = helper.e(".report")

    while (report.lastChild) {
      report.removeChild(report.lastChild)
    }
  }

  render.scrollToBottom = function() {
    var report = helper.e(".report")
    report.scrollTop = report.scrollHeight
  }

  return {
    mod: mod,
    render: render
  }

})()
