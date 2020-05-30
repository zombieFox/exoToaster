var control = (function() {

  var mod = {}

  mod.debug = {
    active: false,
    toggle: function() {
      if (mod.debug.active) {
        mod.debug.active = false
      } else {
        mod.debug.active = true
      }
    }
  }

  mod.game = {
    controls: {
      toast: [{
        element: "[control=toast]",
        type: "button",
        func: function() {
          toast.make(state.get.current().processor.level)
        }
      }],
      processor: [{
        element: "[control=processor-level-add1]",
        type: "button",
        func: function() {
          processor.add(1)
          cycle.max()
          strategy.next()
        }
      }, {
        element: "[control=processor-level-add10]",
        type: "button",
        func: function() {
          processor.add(10)
          cycle.max()
          strategy.next()
        }
      }, {
        element: "[control=processor-level-add100]",
        type: "button",
        func: function() {
          processor.add(100)
          cycle.max()
          strategy.next()
        }
      }],
      electromagnetic: [{
        element: "[control=electromagnetic-level-add1]",
        type: "button",
        func: function() {
          electromagnetic.add(1)
        }
      }, {
        element: "[control=electromagnetic-level-add10]",
        type: "button",
        func: function() {
          electromagnetic.add(10)
        }
      }, {
        element: "[control=electromagnetic-level-add100]",
        type: "button",
        func: function() {
          electromagnetic.add(100)
        }
      }],
      sonic: [{
        element: "[control=sonic-level-add1]",
        type: "button",
        func: function() {
          sonic.add(1)
        }
      }, {
        element: "[control=sonic-level-add10]",
        type: "button",
        func: function() {
          sonic.add(10)
        }
      }, {
        element: "[control=sonic-level-add100]",
        type: "button",
        func: function() {
          sonic.add(100)
        }
      }],
      motivation: [{
        element: "[control=motivation]",
        type: "button",
        func: function() {
          motivation.mod.boost.add()
          motivation.render.boost.meter()
          motivation.render.boost.button()
        }
      }],
      autotoaster: [{
        element: "[control=autotoaster-level-add1]",
        type: "button",
        func: function() {
          autotoaster.add(1)
        }
      }, {
        element: "[control=autotoaster-level-add10]",
        type: "button",
        func: function() {
          autotoaster.add(10)
        }
      }, {
        element: "[control=autotoaster-level-add100]",
        type: "button",
        func: function() {
          autotoaster.add(100)
        }
      }, {
        element: "[control=autotoaster-level-add1000]",
        type: "button",
        func: function() {
          autotoaster.add(1000)
        }
      }],
      megatoaster: [{
        element: "[control=megatoaster-level-add1]",
        type: "button",
        func: function() {
          megatoaster.add(1)
        }
      }, {
        element: "[control=megatoaster-level-add10]",
        type: "button",
        func: function() {
          megatoaster.add(10)
        }
      }, {
        element: "[control=megatoaster-level-add100]",
        type: "button",
        func: function() {
          megatoaster.add(100)
        }
      }, {
        element: "[control=megatoaster-level-add1000]",
        type: "button",
        func: function() {
          megatoaster.add(1000)
        }
      }],
      rockettoaster: [{
        element: "[control=rockettoaster-level-add1]",
        type: "button",
        func: function() {
          rockettoaster.add(1)
        }
      }, {
        element: "[control=rockettoaster-level-add10]",
        type: "button",
        func: function() {
          rockettoaster.add(10)
        }
      }, {
        element: "[control=rockettoaster-level-add100]",
        type: "button",
        func: function() {
          rockettoaster.add(100)
        }
      }, {
        element: "[control=rockettoaster-level-add1000]",
        type: "button",
        func: function() {
          rockettoaster.add(1000)
        }
      }],
      sonictoaster: [{
        element: "[control=sonictoaster-level-add1]",
        type: "button",
        func: function() {
          sonictoaster.add(1)
        }
      }, {
        element: "[control=sonictoaster-level-add10]",
        type: "button",
        func: function() {
          sonictoaster.add(10)
        }
      }, {
        element: "[control=sonictoaster-level-add100]",
        type: "button",
        func: function() {
          sonictoaster.add(100)
        }
      }, {
        element: "[control=sonictoaster-level-add1000]",
        type: "button",
        func: function() {
          sonictoaster.add(1000)
        }
      }],
      plasmatoaster: [{
        element: "[control=plasmatoaster-level-add1]",
        type: "button",
        func: function() {
          plasmatoaster.add(1)
        }
      }, {
        element: "[control=plasmatoaster-level-add10]",
        type: "button",
        func: function() {
          plasmatoaster.add(10)
        }
      }, {
        element: "[control=plasmatoaster-level-add100]",
        type: "button",
        func: function() {
          plasmatoaster.add(100)
        }
      }, {
        element: "[control=plasmatoaster-level-add1000]",
        type: "button",
        func: function() {
          plasmatoaster.add(1000)
        }
      }],
      atomictoaster: [{
        element: "[control=atomictoaster-level-add1]",
        type: "button",
        func: function() {
          atomictoaster.add(1)
        }
      }, {
        element: "[control=atomictoaster-level-add10]",
        type: "button",
        func: function() {
          atomictoaster.add(10)
        }
      }, {
        element: "[control=atomictoaster-level-add100]",
        type: "button",
        func: function() {
          atomictoaster.add(100)
        }
      }, {
        element: "[control=atomictoaster-level-add1000]",
        type: "button",
        func: function() {
          atomictoaster.add(1000)
        }
      }],
      quantumtoaster: [{
        element: "[control=quantumtoaster-level-add1]",
        type: "button",
        func: function() {
          quantumtoaster.add(1)
        }
      }, {
        element: "[control=quantumtoaster-level-add10]",
        type: "button",
        func: function() {
          quantumtoaster.add(10)
        }
      }, {
        element: "[control=quantumtoaster-level-add100]",
        type: "button",
        func: function() {
          quantumtoaster.add(100)
        }
      }, {
        element: "[control=quantumtoaster-level-add1000]",
        type: "button",
        func: function() {
          quantumtoaster.add(1000)
        }
      }]
    },
    all: function() {
      var allGameControls = []
      for (var key in mod.game.controls) {
        mod.game.controls[key].forEach(function(arrayItem, index) {
          allGameControls.push(arrayItem)
        })
      }
      return allGameControls
    }
  }

  mod.menu = {
    controls: {
      nav: {
        buttons: [{
          element: "[control=menu-open]",
          type: "button",
          func: function() {
            menu.open()
          }
        }, {
          element: "[control=menu-close]",
          type: "button",
          func: function() {
            menu.close()
          }
        }, {
          element: "[control=menu-theme]",
          type: "button",
          func: function() {
            menu.nav("theme")
          }
        }, {
          element: "[control=menu-data]",
          type: "button",
          func: function() {
            menu.nav("data")
          }
        }, {
          element: "[control=menu-coffee]",
          type: "button",
          func: function() {
            menu.nav("coffee")
          }
        }, {
          element: "[control=menu-exotoaster]",
          type: "button",
          func: function() {
            menu.nav("exotoaster")
          }
        }],
      },
      theme: {
        style: [{
          element: "[control=theme-style-dark]",
          path: "theme.style",
          type: "radio",
          func: function() {
            theme.style.dark()
          }
        }, {
          element: "[control=theme-style-light]",
          path: "theme.style",
          type: "radio",
          func: function() {
            theme.style.light()
          }
        }, {
          element: "[control=theme-style-system]",
          path: "theme.style",
          type: "radio",
          func: function() {
            theme.style.system()
          }
        }],
        color: [{
          element: "[control=theme-color-rgb-color]",
          path: "theme.color.rgb",
          type: "color",
          mirrorElement: [{
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-text]",
          path: "theme.color.rgb",
          type: "text",
          valueConvert: ["hexTextString"],
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-default]",
          type: "button",
          func: function() {
            mod.default("theme.color.rgb")
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
            render.update.control.menu()
          }
        }, {
          element: "[control=theme-color-hsl-h-range]",
          path: "theme.color.hsl.h",
          type: "range",
          valueModify: {
            min: 0,
            max: 359
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.rgb()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-hsl-h-number]",
          path: "theme.color.hsl.h",
          type: "number",
          valueModify: {
            min: 0,
            max: 359
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.rgb()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-hsl-s-range]",
          path: "theme.color.hsl.s",
          type: "range",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.rgb()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-hsl-s-number]",
          path: "theme.color.hsl.s",
          type: "number",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.rgb()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-hsl-l-range]",
          path: "theme.color.hsl.l",
          type: "range",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.rgb()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-hsl-l-number]",
          path: "theme.color.hsl.l",
          type: "number",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.color.rgb()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-r-range]",
          path: "theme.color.rgb.r",
          type: "range",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-rgb-r-number]",
            path: "theme.color.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-r-number]",
          path: "theme.color.rgb.r",
          type: "number",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-rgb-r-range]",
            path: "theme.color.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-g-range]",
          path: "theme.color.rgb.g",
          type: "range",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-rgb-g-number]",
            path: "theme.color.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-g-number]",
          path: "theme.color.rgb.g",
          type: "number",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-rgb-g-range]",
            path: "theme.color.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-b-range]",
          path: "theme.color.rgb.b",
          type: "range",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-rgb-b-number]",
            path: "theme.color.rgb.b",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-rgb-b-number]",
          path: "theme.color.rgb.b",
          type: "number",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-color-rgb-color]",
            path: "theme.color.rgb",
            type: "color"
          }, {
            element: "[control=theme-color-rgb-text]",
            path: "theme.color.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-color-rgb-b-range]",
            path: "theme.color.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-range]",
            path: "theme.color.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-h-number]",
            path: "theme.color.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-s-range]",
            path: "theme.color.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-s-number]",
            path: "theme.color.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-color-hsl-l-range]",
            path: "theme.color.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-color-hsl-l-number]",
            path: "theme.color.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.color.hsl()
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-contrast-light-range]",
          path: "theme.color.contrast.light",
          type: "range",
          valueConvert: ["float"],
          valueModify: {
            min: 100,
            max: 800,
            step: 10
          },
          mirrorElement: [{
            element: "[control=theme-color-contrast-light-number]",
            path: "theme.color.contrast.light",
            type: "number",
            valueConvert: ["float"]
          }],
          func: function() {
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-contrast-light-number]",
          path: "theme.color.contrast.light",
          type: "number",
          valueConvert: ["float"],
          valueModify: {
            min: 100,
            max: 800,
            step: 10
          },
          mirrorElement: [{
            element: "[control=theme-color-contrast-light-range]",
            path: "theme.color.contrast.light",
            type: "range",
            valueConvert: ["float"]
          }],
          func: function() {
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-contrast-light-default]",
          type: "button",
          func: function() {
            mod.default("theme.color.contrast.light")
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
            render.update.control.menu()
          }
        }, {
          element: "[control=theme-color-contrast-dark-range]",
          path: "theme.color.contrast.dark",
          type: "range",
          valueConvert: ["float"],
          valueModify: {
            min: 100,
            max: 800,
            step: 10
          },
          mirrorElement: [{
            element: "[control=theme-color-contrast-dark-number]",
            path: "theme.color.contrast.dark",
            type: "number",
            valueConvert: ["float"]
          }],
          func: function() {
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-contrast-dark-number]",
          path: "theme.color.contrast.dark",
          type: "number",
          valueConvert: ["float"],
          valueModify: {
            min: 100,
            max: 800,
            step: 10
          },
          mirrorElement: [{
            element: "[control=theme-color-contrast-dark-range]",
            path: "theme.color.contrast.dark",
            type: "range",
            valueConvert: ["float"]
          }],
          func: function() {
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
          }
        }, {
          element: "[control=theme-color-contrast-dark-default]",
          type: "button",
          func: function() {
            mod.default("theme.color.contrast.dark")
            theme.mod.color.generated()
            theme.render.color.shade()
            theme.render.themeMetaTag()
            render.update.control.menu()
          }
        }],
        accent: [{
          element: "[control=theme-accent-rgb-color]",
          path: "theme.accent.rgb",
          type: "color",
          mirrorElement: [{
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-text]",
          path: "theme.accent.rgb",
          type: "text",
          valueConvert: ["hexTextString"],
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-default]",
          type: "button",
          func: function() {
            mod.default("theme.accent.rgb")
            theme.mod.accent.hsl()
            theme.render.accent.color()
            render.update.control.menu()
          }
        }, {
          element: "[control=theme-accent-hsl-h-range]",
          path: "theme.accent.hsl.h",
          type: "range",
          valueModify: {
            min: 0,
            max: 359
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.rgb()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-hsl-h-number]",
          path: "theme.accent.hsl.h",
          type: "number",
          valueModify: {
            min: 0,
            max: 359
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.rgb()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-hsl-s-range]",
          path: "theme.accent.hsl.s",
          type: "range",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.rgb()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-hsl-s-number]",
          path: "theme.accent.hsl.s",
          type: "number",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.rgb()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-hsl-l-range]",
          path: "theme.accent.hsl.l",
          type: "range",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.rgb()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-hsl-l-number]",
          path: "theme.accent.hsl.l",
          type: "number",
          valueModify: {
            min: 0,
            max: 100
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.rgb()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-r-range]",
          path: "theme.accent.rgb.r",
          type: "range",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-rgb-r-number]",
            path: "theme.accent.rgb.r",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-r-number]",
          path: "theme.accent.rgb.r",
          type: "number",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-rgb-r-range]",
            path: "theme.accent.rgb.r",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-g-range]",
          path: "theme.accent.rgb.g",
          type: "range",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-rgb-g-number]",
            path: "theme.accent.rgb.g",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-g-number]",
          path: "theme.accent.rgb.g",
          type: "number",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-rgb-g-range]",
            path: "theme.accent.rgb.g",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-b-range]",
          path: "theme.accent.rgb.b",
          type: "range",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-rgb-b-number]",
            path: "theme.accent.rgb.b",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-rgb-b-number]",
          path: "theme.accent.rgb.b",
          type: "number",
          valueModify: {
            min: 0,
            max: 255
          },
          mirrorElement: [{
            element: "[control=theme-accent-rgb-color]",
            path: "theme.accent.rgb",
            type: "color"
          }, {
            element: "[control=theme-accent-rgb-text]",
            path: "theme.accent.rgb",
            type: "text",
            valueConvert: ["hexTextString"]
          }, {
            element: "[control=theme-accent-rgb-b-range]",
            path: "theme.accent.rgb.b",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-range]",
            path: "theme.accent.hsl.h",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-h-number]",
            path: "theme.accent.hsl.h",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-s-range]",
            path: "theme.accent.hsl.s",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-s-number]",
            path: "theme.accent.hsl.s",
            type: "number"
          }, {
            element: "[control=theme-accent-hsl-l-range]",
            path: "theme.accent.hsl.l",
            type: "range"
          }, {
            element: "[control=theme-accent-hsl-l-number]",
            path: "theme.accent.hsl.l",
            type: "number"
          }],
          func: function() {
            theme.mod.accent.hsl()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-random-active]",
          path: "theme.accent.random.active",
          type: "checkbox",
          func: function() {
            render.dependents()
            theme.render.accent.color()
          }
        }, {
          element: "[control=theme-accent-random-style-any]",
          path: "theme.accent.random.style",
          type: "radio",
          func: function() {
            render.class()
          }
        }, {
          element: "[control=theme-accent-random-style-light]",
          path: "theme.accent.random.style",
          type: "radio",
          func: function() {
            render.class()
          }
        }, {
          element: "[control=theme-accent-random-style-dark]",
          path: "theme.accent.random.style",
          type: "radio",
          func: function() {
            render.class()
          }
        }, {
          element: "[control=theme-accent-random-style-pastel]",
          path: "theme.accent.random.style",
          type: "radio",
          func: function() {
            render.class()
          }
        }, {
          element: "[control=theme-accent-random-style-saturated]",
          path: "theme.accent.random.style",
          type: "radio",
          func: function() {
            render.class()
          }
        }, {
          element: "[control=theme-accent-randomise]",
          type: "button",
          func: function() {
            theme.accent.random()
            render.update.control.menu()
          }
        }]
      },
      data: {
        restore: [{
          element: "[control=data-import]",
          type: "file",
          func: function() {
            data.mod.import()
          }
        }],
        backup: [{
          element: "[control=data-export]",
          type: "button",
          func: function() {
            data.mod.export.all()
          }
        }],
        clear: [{
          element: "[control=data-clear]",
          type: "button",
          func: function() {
            data.render.clear()
            menu.close()
          }
        }]
      }
    },
    all: function() {
      var allMenuControls = []
      for (var key1 in mod.menu.controls) {
        for (var key2 in mod.menu.controls[key1]) {
          mod.menu.controls[key1][key2].forEach(function(arrayItem, index) {
            allMenuControls.push(arrayItem)
          })
        }
      }
      return allMenuControls
    }
  }

  mod.default = function(path) {
    state.set({
      path: path,
      value: helper.getObject({
        object: state.get.default(),
        path: path
      })
    })
  }

  var bind = {}

  bind.control = {}

  bind.control.supportedElement = ["checkbox", "radio", "text", "number", "range", "color", "textarea"]

  bind.control.timer = {
    inputUpdate: null
  }

  bind.control.value = {
    set: function(object) {
      if (object.path) {
        var newValue = bind.control.value.get[object.type](object)
        if (object.valueModify) {
          for (var key in object.valueModify) {
            newValue = bind.control.value.modify[key](newValue, object)
          }
        }
        if (object.valueConvert) {
          object.valueConvert.forEach(function(arrayItem, index) {
            newValue = bind.control.value.convert[arrayItem](newValue, object)
          })
        }
        state.set({
          path: object.path,
          value: newValue
        })
        if (mod.debug.active) {
          console.log("state set", object.path, helper.getObject({
            object: state.get.current(),
            path: object.path
          }))
        }
      }
    },
    get: {
      checkbox: function(object) {
        return helper.e(object.element).checked
      },
      radio: function(object) {
        return helper.e(object.element).value
      },
      text: function(object) {
        return helper.e(object.element).value
      },
      textarea: function(object) {
        return helper.e(object.element).value
      },
      number: function(object) {
        return parseInt(helper.e(object.element).value, 10)
      },
      range: function(object) {
        return parseInt(helper.e(object.element).value, 10)
      },
      color: function(object) {
        return helper.convertColor.hex.rgb(helper.e(object.element).value)
      }
    },
    convert: {
      reverse: function(value, object) {
        return parseInt(object.valueModify.max, 10) - value
      },
      float: function(value, object) {
        return value / 100
      },
      hexTextString: function(value, object) {
        return helper.convertColor.hex.rgb(value)
      }
    },
    modify: {
      min: function(value, object) {
        if (isNaN(value) || value < object.valueModify.min) {
          value = object.valueModify.min
        }
        return value
      },
      max: function(value, object) {
        if (value > object.valueModify.max) {
          value = object.valueModify.max
        }
        return value
      },
      step: function(value, object) {
        value = Math.round(value / object.valueModify.step) * object.valueModify.step
        return value
      }
    }
  }

  bind.control.eventType = {
    a: "click",
    button: "click",
    checkbox: "change",
    radio: "change",
    text: "input",
    textarea: "input",
    number: "input",
    range: "input",
    color: "change",
    file: "change"
  }

  bind.control.action = function(object) {
    if (object.element) {
      helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
        if (bind.control.supportedElement.includes(object.type)) {
          bind.control.value.set(object)
        }
        if (object.func) {
          object.func()
        }
        data.save()
      })
    }
    if (object.mirrorElement) {
      object.mirrorElement.forEach(function(arrayItem, index) {
        helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
          render.update.control.menu(arrayItem)
        })
      })
    }
    if (object.valueModify) {
      for (var key in object.valueModify) {
        helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
          var update = function() {
            render.update.control.menu(object)
          }
          clearTimeout(bind.control.timer.inputUpdate)
          bind.control.timer.inputUpdate = setTimeout(update, 1000)
        })
      }
    }
  }

  bind.control.game = function() {
    mod.game.all().forEach(function(arrayItem, index) {
      helper.e(arrayItem.element).addEventListener(bind.control.eventType[arrayItem.type], function(event) {
        arrayItem.func()
      })
    })
  }

  bind.control.menu = function() {
    mod.menu.all().forEach(function(arrayItem, index) {
      if (helper.e(arrayItem.element)) {
        bind.control.action(arrayItem)
      }
    })
  }

  var render = {}

  render.class = function() {
    var html = helper.e("html")
    var all = {
      theme: [{
        remove: [
          "is-theme-style-dark",
          "is-theme-style-light",
        ],
        name: "is-theme-style-" + state.get.current().theme.style
      }]
    }

    var classCheck = function(array) {
      array.forEach(function(arrayItem, index) {
        if ("remove" in arrayItem) {
          arrayItem.remove.forEach(function(arrayItem, index) {
            html.classList.remove(arrayItem)
          })
        }
        if ("condition" in arrayItem) {
          if (arrayItem.condition()) {
            html.classList.remove(arrayItem.name)
          }
        } else {
          html.classList.add(arrayItem.name)
        }
      })
    }

    classCheck(all.theme)
  }

  render.dependents = function() {
    var type = {
      control: ["input", "button", "textarea"],
      element: ["label", "p", "div"]
    }
    var disable = {
      control: function(control, state) {
        if (control) {
          if (state) {
            control.disabled = false
          } else {
            control.disabled = true
          }
        }
      },
      element: function(element, state) {
        if (element) {
          if (state) {
            element.classList.remove("disabled")
          } else {
            element.classList.add("disabled")
          }
        }
      }
    }
    var all = {
      theme: [{
        condition: function() {
          return (state.get.current().theme.accent.random.active)
        },
        dependents: function() {
          return [
            "[control=theme-accent-random-style-any]",
            "[control=theme-accent-random-style-light]",
            "[control=theme-accent-random-style-dark]",
            "[control=theme-accent-random-style-pastel]",
            "[control=theme-accent-random-style-saturated]",
            "[control=theme-accent-randomise]"
          ]
        }
      }]
    }

    var disableCheck = function(array) {
      array.forEach(function(arrayItem, index) {
        var condition = arrayItem.condition()
        arrayItem.dependents().forEach(function(arrayItem, index) {
          var element = helper.eA(arrayItem)
          element.forEach(function(arrayItem, index) {
            var elementType = arrayItem.tagName.toLowerCase()
            if (type.control.includes(elementType)) {
              disable.control(arrayItem, condition)
            } else if (type.element.includes(elementType)) {
              disable.element(arrayItem, condition)
            }
          })

        })
      })
    }

    disableCheck(all.theme)
  }

  render.update = {
    value: {
      set: {
        checkbox: function(object) {
          helper.e(object.element).checked = helper.getObject({
            object: state.get.current(),
            path: object.path
          })
        },
        radio: function(object) {
          helper.e(object.element.substring(0, object.element.lastIndexOf("-") + 1) + helper.getObject({
            object: state.get.current(),
            path: object.path
          })).checked = true
        },
        text: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          })
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object)
            })
          }
          helper.e(object.element).value = newValue
        },
        textarea: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          })
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object)
            })
          }
          helper.e(object.element).value = newValue
        },
        number: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          })
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object)
            })
          }
          helper.e(object.element).value = Math.round(newValue)
        },
        range: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          })
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object)
            })
          }
          helper.e(object.element).value = newValue
        },
        color: function(object) {
          helper.e(object.element).value = helper.convertColor.rgb.hex(helper.getObject({
            object: state.get.current(),
            path: object.path
          }))
        }
      },
      convert: {
        reverse: function(value, object) {
          return object.valueModify.max - value
        },
        float: function(value, object) {
          return value * 100
        },
        hexTextString: function(value, object) {
          return helper.convertColor.rgb.hex(value)
        }
      }
    },
    control: {
      menu: function(object) {
        if (object) {
          if (bind.control.supportedElement.includes(object.type) && helper.e(object.element)) {
            render.update.value.set[object.type](object)
          }
        } else {
          mod.menu.all().forEach(function(arrayItem, index) {
            if (bind.control.supportedElement.includes(arrayItem.type) && helper.e(arrayItem.element)) {
              render.update.value.set[arrayItem.type](arrayItem)
            }
          })
        }
      }
    }
  }

  render.input = {
    menu: function() {
      mod.menu.all().forEach(function(arrayItem, index) {
        if (arrayItem.valueModify) {
          for (var key in arrayItem.valueModify) {
            helper.e(arrayItem.element)[key] = arrayItem.valueModify[key]
          }
        }
      })
    }
  }

  render.disable = {
    check: function() {
      mod.game.all().forEach(function(arrayItem, index) {
        if ("disable" in arrayItem) {
          if (arrayItem.disable.condition()) {
            helper.e(arrayItem.element).disabled = true
          }
        }
      })
    }
  }

  var debug = function() {
    mod.debug.toggle()
  }

  var init = function() {
    bind.control.game()
    bind.control.menu()
    render.input.menu()
    render.update.control.menu()
    render.dependents()
    render.class()
    render.disable.check()
  }

  return {
    debug: debug,
    mod: mod,
    render: render,
    init: init
  }

})()
