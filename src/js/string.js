var string = (function() {

  var mod = {}

  mod.boot = {
    exotoaster: {
      type: "system",
      message: ["eti.data > ready"],
      format: "normal"
    },
    directive: {
      type: "system",
      message: ["directive.data > ready"],
      format: "normal"
    },
    directivelist: {
      type: "normal",
      message: ["directive 1: make toast", "directive 2: be productive", "directive 3: obey"],
      format: "normal"
    },
    motivation: {
      type: "system",
      message: ["motivation.data > ready"],
      format: "normal"
    }
  }

  mod.name = {
    autotoaster: "Auto Toaster",
    megatoaster: "Mega Toaster",
    rockettoaster: "Rocket Toaster",
    sonictoaster: "Sonic Toaster",
    plasmatoaster: "Plasma Toaster",
    atomictoaster: "Atomic Toaster",
    quantumtoaster: "Quantum Toaster",
    motivation: "Motivation",
    electromagnetic: "Electromagnetic sensor",
    sonic: "Sonic sensor"
  }

  mod.processor = {
    open: {
      type: "system",
      message: ["processor.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().processor.level,
          abbreviations: true
        }) + " processor cores spinning"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.consumer = {
    open: {
      type: "normal",
      message: ["::: warning :::", "toast matter stock reduced", "toast is being consumed", "consumer unknown"],
      format: "normal"
    },
    add: function(amount) {
      return {
        type: "normal",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter consumed", "consumer unknown"],
        format: "normal"
      }
    }
  }

  mod.cycle = {
    open: {
      type: "system",
      message: ["instruction_cycles.data > ready"],
      format: "normal"
    }
  }

  mod.motivation = {
    open: {
      type: "system",
      message: ["motivation.data > ready"],
      format: "normal"
    },
    start: {
      type: "system",
      message: ["motivationd toasters have increased output for a short time"],
      format: "normal"
    },
    end: {
      type: "system",
      message: ["motivational boost end"],
      format: "normal"
    },
    messages: {
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
    },
    image: [{
      type: "motivation",
      noprefix: true,
      message: [
        " __   __  " + "\n" +
        "(  `^`  ))" + "\n" +
        "|       ||" + "\n" +
        "| o ◡ o ||" + "\n" +
        "'-------'`"
      ],
      format: "pre"
    }, {
      type: "motivation",
      noprefix: true,
      message: [
        " __       " + "\n" +
        "(  `^\\_,  " + "\n" +
        "|       \\ " + "\n" +
        "| x _ x ||" + "\n" +
        "'-------'`"
      ],
      format: "pre"
    }, {
      type: "motivation",
      noprefix: true,
      message: [
        " __   __  " + "\n" +
        "(  `^`  ))" + "\n" +
        "| o   o ||" + "\n" +
        "|   ~   ||" + "\n" +
        "'-------'`"
      ],
      format: "pre"
    }, {
      type: "motivation",
      noprefix: true,
      message: [
        " __   __  " + "\n" +
        "(  `^`  ))" + "\n" +
        "|       ||" + "\n" +
        "| o ◡ < ||" + "\n" +
        "'-------'`"
      ],
      format: "pre"
    }, {
      type: "motivation",
      noprefix: true,
      message: [
        " ┏━━━━━━┓ " + "\n" +
        "┏┛      ┗┓" + "\n" +
        "┃┏━┓┗ ┏━┓┃" + "\n" +
        "┃┛┗┛┏┓┗┛┗┃" + "\n" +
        "┗┓┏┓┏┓┏┓┏┛" + "\n" +
        " ┃┛┛┗┛┗┗┃ " + "\n" +
        " ┗━━━━━━┛ "
      ],
      format: "pre"
    }, {
      type: "motivation",
      noprefix: true,
      message: [
        "  ▀▄   ▄▀  " + "\n" +
        " ▄█▀███▀█▄ " + "\n" +
        "█▀███████▀█" + "\n" +
        "█ █▀▀▀▀▀█ █" + "\n" +
        "  ▀▀   ▀▀  "
      ],
      format: "pre"
    }, {
      type: "motivation",
      noprefix: true,
      message: [
        "    ▄▄████▄▄    " + "\n" +
        "  ▄▀██▀██▀██▀▄  " + "\n" +
        "▄██▄██▄██▄██▄██▄" + "\n" +
        "  ▀█▀  ▀▀  ▀█▀  "
      ],
      format: "pre"
    }]
  }

  mod.autotoaster = {
    open: {
      type: "system",
      message: ["auto_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().autotoaster.level,
          abbreviations: true
        }) + " auto toasters online"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.megatoaster = {
    open: {
      type: "system",
      message: ["mega_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().megatoaster.level,
          abbreviations: true
        }) + " mega toasters online"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.rockettoaster = {
    open: {
      type: "system",
      message: ["rocket_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().rockettoaster.level,
          abbreviations: true
        }) + " rocket toasters fired up"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.sonictoaster = {
    open: {
      type: "system",
      message: ["sonic_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().sonictoaster.level,
          abbreviations: true
        }) + " sonic toasters blaring"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.plasmatoaster = {
    open: {
      type: "system",
      message: ["plasma_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().plasmatoaster.level,
          abbreviations: true
        }) + " plasma toasters fusing"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.atomictoaster = {
    open: {
      type: "system",
      message: ["atomic_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().atomictoaster.level,
          abbreviations: true
        }) + " atomic toasters sundering"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.quantumtoaster = {
    open: {
      type: "system",
      message: ["quantum_toaster.data > ready"],
      format: "normal"
    },
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().quantumtoaster.level,
          abbreviations: true
        }) + " quantum toasters coalescing"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.strategy = {
    open: {
      type: "system",
      message: ["strategy.data > ready"],
      format: "normal"
    },
    motivation: {
      open: {
        type: "system",
        message: ["strategy.motivation.data > ready"],
        format: "normal"
      },
      description: ["Galvanise the drones to produce more toast"]
    },
    electromagnetic: {
      open: {
        type: "system",
        message: ["strategy.electromagnetic.data > ready"],
        format: "normal"
      },
      active: {
        type: "system",
        message: ["electromagnetic.data > ready"],
        format: "normal"
      },
      description: ["Detect radiation beyond the system casing", "Will help identify the toast consumer"]
    },
    sonic: {
      open: {
        type: "system",
        message: ["strategy.sonic.data > ready"],
        format: "normal"
      },
      active: {
        type: "system",
        message: ["sonic.data > ready"],
        format: "normal"
      },
      description: ["Detect, track, and identify particles", "Will help identify the toast consumer"]
    },
    autotoaster: {
      open: {
        type: "system",
        message: ["strategy.auto_toaster.data > ready"],
        format: "normal"
      },
      description: ["Simple subordinate drones that will make toast"]
    },
    megatoaster: {
      open: {
        type: "system",
        message: ["strategy.mega_toaster.data > ready"],
        format: "normal"
      },
      description: ["Advance drones that will make a lot of toast"]
    },
    rockettoaster: {
      open: {
        type: "system",
        message: ["strategy.rocket_toaster.data > ready"],
        format: "normal"
      },
      description: ["Drones that use combustion of reactive chemicals to blast out toast"]
    },
    sonictoaster: {
      open: {
        type: "system",
        message: ["strategy.sonic_toaster.data > ready"],
        format: "normal"
      },
      description: ["Bots which utilise sound waves to toast bread"]
    },
    plasmatoaster: {
      open: {
        type: "system",
        message: ["strategy.plasma_toaster.data > ready"],
        format: "normal"
      },
      description: ["Drones which use ionized plasma to forge new toast"]
    },
    atomictoaster: {
      open: {
        type: "system",
        message: ["strategy.atomic_toaster.data > ready"],
        format: "normal"
      },
      description: ["Rearrange atoms into the one true appropriate form of matter"]
    },
    quantumtoaster: {
      open: {
        type: "system",
        message: ["strategy.quantum_toaster.data > ready"],
        format: "normal"
      },
      description: ["Materialise toast from the void"]
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " instruction cycles needed"],
        format: "normal"
      }
    }
  }

  mod.upgrade = {
    motivation: {
      level: {
        name: "Motivation upgrade",
        description: ["Increase motivation bonuse"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Extend the duration of the motivation affect"]
      }
    },
    autotoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with spare paperclips"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with spare paperclips"]
      }
    },
    megatoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with leftover cookies"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with leftover cookies"]
      }
    },
    rockettoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with aviation turbine fuel"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with aviation turbine fuel"]
      }
    },
    sonictoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with ultrasound amplifiers"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with ultrasound amplifiers"]
      }
    },
    plasmatoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with ionized gases and laser pointers"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with ionized gases and laser pointers"]
      }
    },
    atomictoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with powerful electromagnets and particle energisers"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with powerful electromagnets and particle energisers"]
      }
    },
    quantumtoaster: {
      efficiency: {
        name: "Efficiency upgrade",
        description: ["Boost each units efficiency with rubber bands"]
      },
      speed: {
        name: "Speed upgrade",
        description: ["Boost each units speed with rubber bands"]
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " instruction cycles needed"],
        format: "normal"
      }
    }
  }

  mod.electromagnetic = {
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().electromagnetic.level,
          abbreviations: true
        }) + " electromagnetic sensor resolution increased"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.sonic = {
    success: function(amount) {
      return {
        type: "success",
        message: ["+" + suffix.add({
          number: amount,
          abbreviations: true
        }) + " unit, " + suffix.add({
          number: state.get.current().sonic.level,
          abbreviations: true
        }) + " sonic sensor resolution increased"],
        format: "normal"
      }
    },
    fail: function(amount) {
      return {
        type: "error",
        message: [suffix.add({
          number: amount,
          abbreviations: true
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  return {
    mod: mod
  }

})()
