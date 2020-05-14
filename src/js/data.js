var data = (function() {

  var saveName = "exoToaster"

  var mod = {}

  mod.import = function() {
    var fileList = helper.e("[control=data-import]").files
    if (fileList.length > 0) {
      validateJsonFile(fileList)
    }
  }

  mod.export = {
    timestamp: function() {
      var timeObject = helper.timestamp()
      var prefix = function(value) {
        if (value < 10) {
          value = "0" + value
        }
        return value
      }
      timeObject.hours = prefix(timeObject.hours)
      timeObject.minutes = prefix(timeObject.minutes)
      timeObject.seconds = prefix(timeObject.seconds)
      timeObject.date = prefix(timeObject.date)
      timeObject.month = prefix(timeObject.month + 1)
      timeObject.year = prefix(timeObject.year)
      return timeObject
    },
    generateFile: function(name, data) {
      var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
      var link = document.createElement("a")
      link.setAttribute("href", data)
      link.setAttribute("download", name)
      link.addEventListener("click", function(event) {
        this.remove()
      }, false)
      helper.e("body").appendChild(link)
      link.click()
    },
    all: function() {
      var timestamp = mod.export.timestamp()
      timestamp = timestamp.year + "." + timestamp.month + "." + timestamp.date + " - " + timestamp.hours + " " + timestamp.minutes + " " + timestamp.seconds
      var fileName = saveName + " backup - " + timestamp + ".json"
      mod.export.generateFile(fileName, load())
    }
  }

  mod.restore = function(data) {
    var action = {
      all: function() {
        data = update.run(data)
        mod.set(saveName, JSON.stringify(data))
      }
    }
    if (data) {
      // if data has a version number and version number is less than current version
      if (data.version != version.get().number) {
        console.log("data version " + data.version + " found less than current")
        action.all(data)
      } else {
        console.log("data version " + version.get().number + " no need to run update")
        mod.set(saveName, JSON.stringify(data))
      }
    } else {
      console.log("no data found to load")
    }
  }

  mod.set = function(key, data) {
    localStorage.setItem(key, data)
  }

  mod.get = function(key) {
    return localStorage.getItem(key)
  }

  mod.remove = function(key) {
    localStorage.removeItem(key)
  }

  var bind = {}

  bind.feedback = {
    animation: {
      set: function(animationClass, action) {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback")
        controlDataImportFeedback.classList.add(animationClass)
        var animationEndAction = function() {
          if (action) {
            action()
          }
          bind.feedback.animation.reset()
        }
        controlDataImportFeedback.addEventListener("animationend", animationEndAction, false)
      },
      reset: function() {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback")
        controlDataImportFeedback.classList.remove("is-shake")
        controlDataImportFeedback.classList.remove("is-pop")
        controlDataImportFeedback.classList.remove("is-jello")
        controlDataImportFeedback.removeEventListener("animationend", bind.feedback.animation.reset, false)
      }
    }
  }

  var render = {}

  render.clear = function() {
    var clearContent = helper.node("div")
    var para1 = helper.node("p:Are you sure you want to clear all exoToaster data? All game progress will be lost.")
    var para2 = helper.node("p:This can not be undone.")
    clearContent.appendChild(para1)
    clearContent.appendChild(para2)
    modal.open({
      heading: "Clear all exoToaster data?",
      content: clearContent,
      successAction: function() {
        wipe()
        render.reload()
      },
      actionText: "Clear all data",
      size: "small"
    })
  }

  render.reload = function() {
    location.reload()
  }

  render.input = {
    clear: function() {
      var input = helper.e("[control=data-import]")
      input.value = ""
    }
  }

  render.feedback = {
    empty: function() {
      var controlDataImportFeedback = helper.e(".control-data-import-feedback")
      var para1 = helper.node("p:No JSON file selected.|class:muted small")
      controlDataImportFeedback.appendChild(para1)
    },
    success: function(name, action) {
      var controlDataImportFeedback = helper.e(".control-data-import-feedback")
      var para1 = helper.node("p:Success! Restoring exoToaster game data.|class:muted small")
      var para2 = helper.node("p:" + name)
      controlDataImportFeedback.appendChild(para1)
      controlDataImportFeedback.appendChild(para2)
      if (action) {
        bind.feedback.animation.set("is-pop", action)
      }
    },
    clear: function(override) {
      var options = {
        animate: null
      }
      if (override) {
        options = helper.applyOptions(options, override)
      }
      var controlDataImportFeedback = helper.e(".control-data-import-feedback")
      while (controlDataImportFeedback.lastChild) {
        controlDataImportFeedback.removeChild(controlDataImportFeedback.lastChild)
      }
      if (options.animate) {
        bind.feedback.animation.set("is-jello")
      }
    },
    fail: {
      notJson: function(name) {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback")
        var para1 = helper.node("p:Not a JSON file. Make sure the selected file came from exoToaster.|class:small muted")
        var para2 = helper.node("p:" + name)
        controlDataImportFeedback.appendChild(para1)
        controlDataImportFeedback.appendChild(para2)
        bind.feedback.animation.set("is-shake")
      },
      notExoToasterJson: function(name) {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback")
        var para1 = helper.node("p:Not the right kind of JSON file. Make sure the selected file came from exoToaster.|class:small muted")
        var para2 = helper.node("p:" + name)
        controlDataImportFeedback.appendChild(para1)
        controlDataImportFeedback.appendChild(para2)
        bind.feedback.animation.set("is-shake")
      }
    }
  }

  var validateJsonFile = function(fileList) {
    // make new file reader
    var reader = new FileReader()
    // define the on load event for the reader
    reader.onload = function(event) {
      // is this a JSON file
      if (helper.isJsonString(event.target.result)) {
        // is this a exoToaster JSON
        if (JSON.parse(event.target.result).exotoaster) {
          render.feedback.clear()
          render.feedback.success(fileList[0].name, function() {
            mod.restore(JSON.parse(event.target.result))
            render.reload()
          })
          render.input.clear()
        } else {
          // not a exoToaster JSON file
          render.feedback.clear()
          render.feedback.fail.notExoToasterJson(fileList[0].name)
          render.input.clear()
        }
      } else {
        // not a JSON file
        render.feedback.clear()
        render.feedback.fail.notJson(fileList[0].name)
        render.input.clear()
      }
    }
    // invoke the reader
    reader.readAsText(fileList.item(0))
  }

  var save = function() {
    mod.set(saveName, JSON.stringify({
      exotoaster: true,
      version: version.get().number,
      state: state.get.current()
    }))
  }

  var load = function() {
    if (mod.get(saveName) != null && mod.get(saveName) != undefined) {
      return JSON.parse(mod.get(saveName))
    } else {
      return false
    }
  }

  var wipe = function() {
    mod.remove(saveName)
    render.reload()
  }

  var init = function() {
    mod.restore(data.load())
    render.feedback.empty()
  }

  return {
    init: init,
    mod: mod,
    render: render,
    save: save,
    load: load,
    wipe: wipe
  }

})()
