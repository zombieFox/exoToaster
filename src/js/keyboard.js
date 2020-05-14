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

  var init = function() {
    bind.esc()
    bind.ctrAltD()
    bind.ctrAltM()
  }

  return {
    init: init,
    bind: bind
  }

})()
