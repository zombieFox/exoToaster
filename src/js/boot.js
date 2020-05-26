var boot = (function() {

  var mod = {}

  mod.messages = [{
    delay: 0,
    func: function() {
      report.render(string.mod.boot.exotoaster)
    }
  }, {
    delay: 1000,
    func: function() {
      report.render(string.mod.boot.directive)
    }
  }, {
    delay: 500,
    func: function() {
      report.render(string.mod.boot.directivelist)
    }
  }, {
    delay: 1000,
    func: function() {
      report.render(string.mod.boot.motivation)
    }
  }, {
    delay: 1000,
    func: function() {
      motivation.render.message(0)
    }
  }]

  mod.delay = 0

  var render = {}

  render.intro = function() {
    mod.messages.forEach(function(arrayItem, index) {
      mod.delay = mod.delay + arrayItem.delay
      setTimeout(arrayItem.func, mod.delay)
    })
  }

  var init = function() {
    render.intro()
  }

  return {
    init: init
  }

})()
