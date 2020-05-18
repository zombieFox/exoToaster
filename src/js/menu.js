var menu = (function() {

  var mod = {}

  mod.open = function() {
    state.get.current().menu = true
  }

  mod.close = function() {
    state.get.current().menu = false
  }

  mod.nav = {
    state: {
      theme: true,
      data: false,
      coffee: false,
      exotoaster: false
    },
    toggle: function(name) {
      for (var key in mod.nav.state) {
        mod.nav.state[key] = false
      }
      mod.nav.state[name] = true
    }
  }

  var bind = {}

  bind.focus = {
    loop: function(event) {
      var firstElement = helper.e("[control=menu-theme]")
      var lastElement = helper.e("[control=menu-close]")
      if (event.keyCode == 9 && event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          event.preventDefault()
        }
      } else if (event.keyCode == 9) {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          event.preventDefault()
        }
      }
    },
    add: function() {
      window.addEventListener("keydown", bind.focus.loop)
    },
    remove: function() {
      window.removeEventListener("keydown", bind.focus.loop)
    }
  }

  bind.close = {
    check: function() {
      if (!event.path.includes(helper.e(".menu"))) {
        close()
      }
    },
    add: function() {
      helper.e("html").addEventListener("mouseup", bind.close.check)
    },
    remove: function() {
      helper.e("html").removeEventListener("mouseup", bind.close.check)
    }
  }

  render = {}

  render.panel = function() {
    if (state.get.current().menu) {
      helper.e("html").classList.add("is-menu-open")
    } else {
      helper.e("html").classList.remove("is-menu-open")
    }
  }

  render.nav = {
    active: function() {
      for (var key in mod.nav.state) {
        if (mod.nav.state[key]) {
          helper.e(".menu-content-" + key).classList.remove("is-hidden")
        } else {
          helper.e(".menu-content-" + key).classList.add("is-hidden")
        }
      }
    },
    tabindex: function() {
      var menu = helper.e(".menu")
      var menuCloseTab = helper.e("[control=menu-close]")
      var allMenuContent = helper.eA(".menu-content")
      allMenuContent.forEach(function(arrayItem, index) {
        arrayItem.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
          if (state.get.current().menu) {
            arrayItem.tabIndex = 1
          } else {
            arrayItem.tabIndex = -1
          }
        })
      })
      if (state.get.current().menu) {
        menu.tabIndex = 1
        menuCloseTab.tabIndex = 2
      } else {
        menu.tabIndex = -1
        menuCloseTab.tabIndex = -1
      }
    },
    scroll: function() {
      if (window.innerWidth < 700) {
        helper.e(".menu-area").scrollTop = 0
      } else {
        for (var key in mod.nav.state) {
          if (mod.nav.state[key]) {
            helper.e(".menu-content-" + key).scrollTop = 0
          }
        }
      }
    }
  }

  render.tab = {
    active: function() {
      for (var key in mod.nav.state) {
        var controlMenu = helper.e("[control=menu-" + key + "]")
        if (mod.nav.state[key]) {
          controlMenu.classList.add("active")
        } else {
          controlMenu.classList.remove("active")
        }
      }
    },
    tabindex: function() {
      var allMenuNavTab = helper.eA(".menu-nav-tab")
      allMenuNavTab.forEach(function(arrayItem, index) {
        if (state.get.current().menu) {
          arrayItem.tabIndex = 1
        } else {
          arrayItem.tabIndex = -1
        }
      })
    }
  }

  render.subnav = {
    active: function() {
      for (var key in mod.nav.state) {
        var menuSubnav = helper.e(".menu-subnav-" + key)
        if (menuSubnav) {
          if (mod.nav.state[key]) {
            menuSubnav.classList.add("active")
          } else {
            menuSubnav.classList.remove("active")
          }
        }
      }
    },
    tabindex: function() {
      for (var key in mod.nav.state) {
        var menuNavBody = helper.e(".menu-subnav-" + key)
        if (menuNavBody) {
          menuNavBody.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
            if (mod.nav.state[key] && state.get.current().menu) {
              arrayItem.tabIndex = 1
            } else {
              arrayItem.tabIndex = -1
            }
          })
        }
      }
    },
    height: function() {
      var allMenuNavBody = helper.eA(".menu-subnav")
      allMenuNavBody.forEach(function(arrayItem, index) {
        arrayItem.classList.add("active")
        arrayItem.setAttribute("style", "--menu-subnav-height:" + arrayItem.getBoundingClientRect().height + "px")
        arrayItem.classList.remove("active")
      })
    }
  }

  render.focus = function() {
    helper.e(".menu").focus()
  }

  render.removeStyle = function() {
    helper.e(".menu").removeAttribute("style")
  }

  var nav = function(name) {
    mod.nav.toggle(name)
    render.nav.active()
    render.nav.tabindex()
    render.tab.active()
    render.tab.tabindex()
    render.subnav.active()
    render.subnav.tabindex()
    render.nav.scroll()
  }

  var open = function() {
    mod.open()
    render.panel()
    render.focus()
    render.nav.active()
    render.nav.tabindex()
    render.tab.active()
    render.tab.tabindex()
    render.subnav.active()
    render.subnav.tabindex()
    bind.focus.add()
    bind.close.add()
  }

  var close = function() {
    mod.close()
    render.panel()
    render.nav.active()
    render.nav.tabindex()
    render.tab.active()
    render.tab.tabindex()
    render.subnav.active()
    render.subnav.tabindex()
    bind.focus.remove()
    bind.close.remove()
  }

  var toggle = function() {
    if (state.get.current().menu) {
      close()
    } else {
      open()
    }
  }

  var init = function() {
    mod.close()
    render.removeStyle()
    render.subnav.height()
  }

  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    open: open,
    close: close,
    toggle: toggle,
    nav: nav
  }

})()
