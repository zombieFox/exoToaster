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

  mod.consumer = {
    start: {
      type: "normal",
      message: ["::: warning :::", "toast matter stock reduced", "toast is being consumed", "consumer unknown"],
      format: "normal"
    }
  }

  mod.processor = {
    open: {
      type: "system",
      message: ["processor.data > ready"],
      format: "normal"
    }
  }

  mod.cycle = {
    open: {
      type: "system",
      message: ["instruction_cycles.data > ready"],
      format: "normal"
    }
  }

  mod.strategy = {
    open: {
      type: "system",
      message: ["strategy.data > ready"],
      format: "normal"
    },
    autotoaster: {
      open: {
        type: "system",
        message: ["strategy.auto_toaster.data > ready"],
        format: "normal"
      },
      active: {
        type: "system",
        message: ["auto_toaster.data > ready"],
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
      active: {
        type: "system",
        message: ["mega_toaster.data > ready"],
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
      active: {
        type: "system",
        message: ["rocket_toaster.data > ready"],
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
      active: {
        type: "system",
        message: ["sonic_toaster.data > ready"],
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
      active: {
        type: "system",
        message: ["plasma_toaster.data > ready"],
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
      active: {
        type: "system",
        message: ["atomic_toaster.data > ready"],
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
      active: {
        type: "system",
        message: ["quantum_toaster.data > ready"],
        format: "normal"
      },
      description: ["Materialise toast from the void"]
    },
    motivation: {
      open: {
        type: "system",
        message: ["strategy.motivation.data > ready"],
        format: "normal"
      },
      active: {
        type: "system",
        message: ["motivation.data > ready"],
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
      description: ["Detect radiation beyond the system casing", "Could help understand the toast consumer"]
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
      description: ["Detect partical movement up to 100m radius", "Could help understand the toast consumer"]
    }
  }

  mod.upgrade = {
    efficiency: "Efficiency upgrade",
    speed: "Speed upgrade",
    autotoaster: {
      efficiency: "Boost each units efficiency with spare paperclips",
      speed: "Boost each units speed with spare paperclips"
    },
    megatoaster: {
      efficiency: "Boost each units efficiency with leftover cookies",
      speed: "Boost each units speed with leftover cookies"
    },
    rockettoaster: {
      efficiency: "Boost each units efficiency with aviation turbine fuel",
      speed: "Boost each units speed with aviation turbine fuel"
    },
    sonictoaster: {
      efficiency: "Boost each units efficiency with ultrasound amplifiers",
      speed: "Boost each units speed with ultrasound amplifiers"
    },
    plasmatoaster: {
      efficiency: "Boost each units efficiency with ionized gases and laser pointers",
      speed: "Boost each units speed with ionized gases and laser pointers"
    },
    atomictoaster: {
      efficiency: "Boost each units efficiency with powerful electromagnets and particle energisers",
      speed: "Boost each units speed with powerful electromagnets and particle energisers"
    },
    quantumtoaster: {
      efficiency: "Boost each units efficiency with rubber bands",
      speed: "Boost each units speed with rubber bands"
    }
  }

  mod.processor = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.autotoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.megatoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.rockettoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.sonictoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.plasmatoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.atomictoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  mod.quantumtoaster = {
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
          abbreviations: true,
        }) + " toast matter needed"],
        format: "normal"
      }
    }
  }

  return {
    mod: mod
  }

})()
