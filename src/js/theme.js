var theme = (function() {

  var mod = {}

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

  var init = function() {
    mod.color.generated()
    render.color.shade()
    render.accent.color()
  }

  return {
    mod: mod,
    init: init
  }

})()
