var keyboard = (function() {

  var bind = {}

  bind.esc = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get.current().menu) {
          menu.close()
        } else if (state.get.current().modal) {
          modal.close()
        }
      }
    })
  }

  bind.ctrAltD = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        theme.style.toggle()
        control.render.update.control.menu()
      }
    })
  }

  bind.ctrAltM = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        menu.toggle()
      }
    })
  }

  bind.ctrAltR = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+r
      if (state.get.current().theme.accent.random.active && event.ctrlKey && event.altKey && event.keyCode == 82) {
        theme.accent.random()
        control.render.update.control.menu()
        data.save()
      }
    })
  }

  var init = function() {
    bind.esc()
    bind.ctrAltD()
    bind.ctrAltM()
    bind.ctrAltR()
  }

  return {
    init: init,
    bind: bind
  }

})()
