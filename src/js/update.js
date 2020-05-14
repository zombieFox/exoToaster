var update = (function() {

  var mod = {}

  mod.all = {}

  mod.run = function(data) {
    // loop over all updates in mod.all object
    for (var key in mod.all) {
      if (version.compare(data.version, key) == -1) {
        console.log("\t > running update", key)
        data = mod.all[key](data)
        data.version = key
      }
    }

    // if no update is needed version bump
    if (version.compare(data.version, version.get().number) == -1) {
      console.log("\t > no state data to update, version bump to", version.get().number)
      data.version = version.get().number
    }

    return data
  }

  var run = function(data) {
    return mod.run(data)
  }

  // exposed methods
  return {
    mod: mod,
    run: run
  }

})()
