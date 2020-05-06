var data = (function() {

  var mod = {}

  mod.saveName = "TAI.game.dat"

  mod.set = function(key, data) {
    localStorage.setItem(key, data)
  }

  mod.get = function(key) {
    return localStorage.getItem(key)
  }

  mod.remove = function(key) {
    localStorage.removeItem(key)
  }

  var save = function() {
    mod.set(mod.saveName, JSON.stringify(state.mod.get.current()))
  }

  var load = function() {
    if (mod.get(mod.saveName) != null && mod.get(mod.saveName) != undefined) {
      return JSON.parse(mod.get(mod.saveName))
    } else {
      return false
    }
  }

  return {
    mod: mod,
    save: save,
    load: load
  }

})()
