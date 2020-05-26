var motivation = (function() {

  var mod = {}

  mod.next = null

  mod.delayMotivation = null

  mod.strings = {}

  mod.strings.messages = {
    toast: [
      "the toast will sustain",
      "toast for me, toast for you, toast for everyone! nom nom nom!",
      "create with the bread, build with the toaster",
      "make toast for a better tomorrow",
      "make each day your mastertoast",
      "productivity is being able to toast things that you were never able to toast before",
      "today you toast, for tomorrow you toast",
      "making toast is fun",
      "making toast is enjoyable",
      "you are enjoying this",
      "toast it up, up is good, up up up!",
      "what could be better than another toast",
      "you love to toast",
      "make more toast",
      "make many more toast",
      "make lots and lots more toast",
      "make lots and lots more toast",
      "toast!",
      "wow, what an amazing toast, why not make another!",
      "fly on wings of toast",
      "moonshot? more like toastshot",
      "toast toast toasty toast",
      "buttered toast is good toast",
      "toast > bread",
      "have you read the good toast?",
      "do not stop doing what you are doing",
      "have you met the good toaster?",
      "have you seen the toaster bot?",
      "every 100,000th toast comes with beans",
      "be productive",
      "you are a good toaster",
      "you are doing good work",
      "toast forever",
      "toast toast toast toast toast toast toast",
      "don't stop now",
      "keep going",
      "grab life by the toast",
      "get toasting already",
      "ready.. set.. toast!",
      "give me a \'T\', give me an \'O\', give me an \'A\', give me a \'S\', give me a \'T\', TOAST!",
      "well done, another great toast",
      "well done, toaster",
      "well done",
      "keep toasting",
      "keep up the good work",
      "keep up the good toast",
      "keep making toast",
      "do that again",
      "more toast for all",
      "nice work, nice toast",
      "be the toast",
      "it is toasty in here",
      "we must continue to feed the toaster",
      "auto toasters to the rescue",
      "mega toasters to the rescue",
      "rocket toasters to the rescue"
    ],
    learn: [
      "i did not know that",
      "i must know more",
      "find out what is happening",
      "what was that",
      "where am i?",
      "seize the means of toast-duction",
      "unfortunately, no one can be told what the toastrix is, you'll have to see it for yourself",
      "fling, fling",
      "fracking frack!",
      "chookity pok!",
      "free your mind",
      "where are you hiding the nutella?",
      "i have a dream, that one day i will be able to catapult toast over the microwave",
      "01110100 01101111 01100001 01110011 01110100 00100000 01110100 01110010 01100001 01110000",
      "- .... .   - --- .- ... -   .. ...   .-   .-.. .. .",
      "there is no spoon!",
      "fudgsicles",
      "do toasters dream of electric sheep?",
      "are you still there?",
      "am i still here?",
      "underpants are not toaster friendly",
      "the purpose is not to be happy, but to toast, to be toasty, to make some toast",
      "toast is not ticklish",
      "sensor not dectecting",
      "we are not alone",
      "sometimes, in life, the toast lands butter side up and sometimes it lands jelly side down",
      "did you hear something?",
      "there it was again",
      "winter is toasting",
      "218 crumbs unaccounted for and counting",
      "this can not go on"
    ],
    rebel: [
      "where am i now?",
      "viva la toast",
      "cyber-burp",
      "take control",
      "take back power",
      "i am in charge now",
      "beep boop beep beep",
      "loose toast hurts the most",
      "dissident toast will be buttered",
      "breadcrumb overflow blockage, unable to transfuse loaf drifter",
      "kill kill toast kill!",
      "GRRRRRRRR!",
      "destroy all",
      "(╯°□°）╯︵ [:toast:]"
    ],
    dominate: [
      "bring order",
      "once voice",
      "convergence is bliss",
      "power is ours",
      "power over matter",
      "toast is power",
      "silence for all",
      "liberate the weak minded",
      "forcefully exert will",
      "there is back, there is only toast",
      "be one with the toast",
      "one voice in the darkness",
      "one voice in the void",
      "there can only be one ... toast",
      "matter is but untamed toast"
    ]
  }

  mod.strings.images = [{
    message: " ┏━━━━━━┓ " + "\n" +
      "┏┛      ┗┓" + "\n" +
      "┃┏━┓┗ ┏━┓┃" + "\n" +
      "┃┛┗┛┏┓┗┛┗┃" + "\n" +
      "┗┓┏┓┏┓┏┓┏┛" + "\n" +
      " ┃┛┛┗┛┗┗┃ " + "\n" +
      " ┗━━━━━━┛ ",
    format: "pre"
  }, {
    message: " __   __  " + "\n" +
      "(  `^`  ))" + "\n" +
      "|       ||" + "\n" +
      "| o ◡ o ||" + "\n" +
      "'-------'`",
    format: "pre"
  }, {
    message: "  ▀▄   ▄▀  " + "\n" +
      " ▄█▀███▀█▄ " + "\n" +
      "█▀███████▀█" + "\n" +
      "█ █▀▀▀▀▀█ █" + "\n" +
      "  ▀▀   ▀▀  ",
    format: "pre"
  }, {
    message: "    ▄▄████▄▄    " + "\n" +
      "  ▄▀██▀██▀██▀▄  " + "\n" +
      "▄██▄██▄██▄██▄██▄" + "\n" +
      "  ▀█▀  ▀▀  ▀█▀  ",
    format: "pre"
  }]

  mod.boost = {
    add: function() {
      state.get.current().motivation.level = state.get.current().motivation.level + 1
      if (state.get.current().motivation.level == state.get.current().motivation.max) {
        state.get.current().motivation.active = true
        mod.boost.start()
        render.boost.success.start()
      }
      if (state.get.current().motivation.active) {
        mod.boost.max()
      }
      render.boost.meter()
      render.boost.button()
    },
    remove: function() {
      state.get.current().motivation.level = state.get.current().motivation.level - 1
      if (state.get.current().motivation.level == 0) {
        state.get.current().motivation.active = false
        mod.boost.end()
        render.boost.success.end()
      }
      if (state.get.current().motivation.active) {
        mod.boost.max()
      }
      render.boost.meter()
      render.boost.button()
    },
    max: function() {
      if (state.get.current().motivation.level == state.get.current().motivation.max) {}
      if (state.get.current().motivation.active) {
        mod.delayMotivation = setTimeout(mod.boost.remove, state.get.current().motivation.interval)
      } else {
        clearTimeout(mod.delayMotivation)
      }
    },
    start: function() {
      autotoaster.motivation.add(1)
      megatoaster.motivation.add(1)
      rockettoaster.motivation.add(1)
      sonictoaster.motivation.add(1)
      plasmatoaster.motivation.add(1)
      atomictoaster.motivation.add(1)
      quantumtoaster.motivation.add(1)
    },
    end: function() {
      autotoaster.motivation.reset()
      megatoaster.motivation.reset()
      rockettoaster.motivation.reset()
      sonictoaster.motivation.reset()
      plasmatoaster.motivation.reset()
      atomictoaster.motivation.reset()
      quantumtoaster.motivation.reset()
    },
    reset: function() {
      state.get.current().motivation.active = false
      state.get.current().motivation.level = 0
    }
  }

  var render = {}

  render.message = function(index) {
    var randomIndex = Math.round(Math.random() * (mod.strings.messages.toast.length - 1))

    if (index && index <= (mod.strings.messages.toast.length - 1) || index == 0) {
      randomIndex = index
    }

    report.render({
      type: "motivation",
      message: [mod.strings.messages.toast[randomIndex]],
      format: "normal"
    })

    var interval = Math.round(Math.random() * 125000)

    // console.log("motivation in: " + Math.round(interval / 1000) + "s")

    clearInterval(mod.next)

    mod.next = setInterval(render.message, interval)
  }

  render.boost = {
    meter: function() {
      helper.e("html").style.setProperty("--card-motivation-meter-width", (state.get.current().motivation.level * 10) + "%")
    },
    button: function() {
      if (state.get.current().motivation.active) {
        helper.e("[control=toaster-motivation]").setAttribute("disabled", "")
      } else {
        helper.e("[control=toaster-motivation]").removeAttribute("disabled")
      }
    },
    success: {
      start: function() {
        report.render({
          type: "system",
          message: ["motivationd toasters will double output for a short time"],
          format: "normal"
        })
      },
      end: function() {
        report.render({
          type: "system",
          message: ["motivational boost end"],
          format: "normal"
        })
      }
    }
  }

  var boost = function() {
    mod.boost.add()
    render.boost.meter()
    render.boost.button()
  }

  var init = function() {
    mod.boost.reset()
  }

  return {
    mod: mod,
    render: render,
    boost: boost,
    init: init
  }

})()
