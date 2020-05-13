var keyboard = (function() {

  var bind = {};

  bind.ctrAltD = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        theme.style.toggle();
      };
    }, false);
  };

  bind.ctrAltM = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        console.log("ctrl+alt+m");
      };
    }, false);
  };

  var init = function() {
  bind.ctrAltD();
  bind.ctrAltM();
  };

  return {
    init: init,
    bind: bind
  };

})();
