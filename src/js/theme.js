var theme = (function() {

  var mod = {}

  mod.accent = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.accent.rgb)
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      })
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().theme.accent.hsl)
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      })
    },
    random: function() {
      if (state.get.current().theme.accent.random.active) {
        var randomValue = function(min, max) {
          return Math.floor(Math.random() * (max - min) + 1) + min
        }
        var color = {
          any: function() {
            return {
              h: randomValue(0, 360),
              s: randomValue(0, 100),
              l: randomValue(0, 100)
            }
          },
          light: function() {
            return {
              h: randomValue(0, 360),
              s: randomValue(50, 90),
              l: randomValue(50, 90)
            }
          },
          dark: function() {
            return {
              h: randomValue(0, 360),
              s: randomValue(10, 50),
              l: randomValue(10, 50)
            }
          },
          pastel: function() {
            return {
              h: randomValue(0, 360),
              s: 50,
              l: 80
            }
          },
          saturated: function() {
            return {
              h: randomValue(0, 360),
              s: 100,
              l: 50
            }
          }
        }
        var hsl = color[state.get.current().theme.accent.random.style]()
        var rgb = helper.convertColor.hsl.rgb(hsl)
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.rgb",
          newValue: {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
          }
        })
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.hsl",
          newValue: {
            h: Math.round(hsl.h),
            s: Math.round(hsl.s),
            l: Math.round(hsl.l)
          }
        })
      }
    }
  }

  mod.style = {
    light: function() {
      state.get.current().theme.style = "light"
    },
    dark: function() {
      state.get.current().theme.style = "dark"
    },
    system: function() {
      state.get.current().theme.style = "system"
    }
  }

  mod.color = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb)
      helper.setObject({
        object: state.get.current(),
        path: "theme.color.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      })
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().theme.color.hsl)
      helper.setObject({
        object: state.get.current(),
        path: "theme.color.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      })
    },
    generated: function() {
      var shadeMax = 10
      var shadeMin = 1
      var contrastNeg = state.get.current().theme.color.contrast.dark
      var contrastPos = state.get.current().theme.color.contrast.light
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb)
      var validateRGBNumber = function(rgb) {
        for (var key in rgb) {
          if (rgb[key] < 0) {
            rgb[key] = 0
          } else if (rgb[key] > 255) {
            rgb[key] = 255
          }
          rgb[key] = Math.round(rgb[key])
        }
        return rgb
      }
      // set light theme shades
      for (var i = shadeMax; i >= shadeMin; i--) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l - (contrastNeg * i)
        })
        helper.setObject({
          object: state.get.current(),
          path: "theme.color.generated.negative." + i,
          newValue: validateRGBNumber(rgb)
        })
      }
      // set dark theme shades
      for (var i = shadeMin; i <= shadeMax; i++) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l + (contrastPos * i)
        })
        helper.setObject({
          object: state.get.current(),
          path: "theme.color.generated.positive." + i,
          newValue: validateRGBNumber(rgb)
        })
      }
    }
  }

  var render = {}

  render.accent = {
    color: function() {
      var html = helper.e("html")
      var rgb = state.get.current().theme.accent.rgb
      html.style.setProperty("--theme-accent-r", rgb.r)
      html.style.setProperty("--theme-accent-g", rgb.g)
      html.style.setProperty("--theme-accent-b", rgb.b)
    }
  }

  render.color = {
    shade: function() {
      var html = helper.e("html")
      // negative
      for (var i = 10; i >= 1; i--) {
        var rgb = state.get.current().theme.color.generated.negative[i]
        var number = i
        if (i < 10) {
          number = "0" + number
        }
        html.style.setProperty("--theme-shade-negative-" + number, rgb.r + ", " + rgb.g + ", " + rgb.b)
      }
      // neutral
      var rgb = state.get.current().theme.color.rgb
      html.style.setProperty("--theme-shade", rgb.r + ", " + rgb.g + ", " + rgb.b)
      // positive
      for (var i = 1; i <= 10; i++) {
        var rgb = state.get.current().theme.color.generated.positive[i]
        var number = i
        if (i < 10) {
          number = "0" + number
        }
        html.style.setProperty("--theme-shade-positive-" + number, rgb.r + ", " + rgb.g + ", " + rgb.b)
      }
    }
  }

  render.style = {
    dark: function() {
      var html = helper.e("html")
      html.classList.add("is-theme-style-dark")
      html.classList.remove("is-theme-style-light")
      html.classList.remove("is-theme-style-system")
    },
    light: function() {
      var html = helper.e("html")
      html.classList.remove("is-theme-style-dark")
      html.classList.add("is-theme-style-light")
      html.classList.remove("is-theme-style-system")
    },
    system: function() {
      var html = helper.e("html")
      html.classList.remove("is-theme-style-dark")
      html.classList.remove("is-theme-style-light")
      html.classList.add("is-theme-style-system")
    }
  }

  render.themeMetaTag = function() {
    var head = helper.e("head")
    var metaThemeColor = helper.e(".meta-theme-color")
    if (metaThemeColor) {
      metaThemeColor.remove()
    }
    var meta = helper.node("meta|class:meta-theme-color,name:theme-color,content:" + helper.convertColor.rgb.hex(state.get.current().theme.color.generated.negative[10]))
    head.appendChild(meta)
  }

  var accent = {
    random: function() {
      mod.accent.random()
      render.accent.color()
    }
  }

  var style = {
    dark: function() {
      mod.style.dark()
      render.style.dark()
    },
    light: function() {
      mod.style.light()
      render.style.light()
    },
    system: function() {
      mod.style.system()
      render.style.system()
    },
    check: function() {
      if (state.get.current().theme.style == "dark") {
        style.dark()
      } else if (state.get.current().theme.style == "light") {
        style.light()
      } else if (state.get.current().theme.style == "system") {
        style.system()
      }
    },
    toggle: function() {
      if (state.get.current().theme.style == "dark") {
        style.light()
      } else if (state.get.current().theme.style == "light") {
        style.dark()
      }
    }
  }

  var init = function() {
    mod.color.generated()
    mod.accent.random()
    render.color.shade()
    render.accent.color()
    render.themeMetaTag()
  }

  return {
    mod: mod,
    accent: accent,
    style: style,
    render: render,
    init: init
  }

})()
