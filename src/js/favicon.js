var favicon = (function() {

  var bind = {}

  bind.prefersColorScheme = function() {
    window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change", function(event) {
      render.update()
    })
  }

  var render = {}

  render.update = function() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      helper.e("#favicon").href = "assets/favicon-light.svg"
    } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
      helper.e("#favicon").href = "assets/favicon-dark.svg"
    }
  }

  var init = function() {
    bind.prefersColorScheme()
    render.update()
  }

  return {
    init: init
  }

})()
