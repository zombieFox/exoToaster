var modal = (function() {

  var previousModal = null

  var mod = {}

  mod.open = function() {
    state.set({
      path: "modal",
      value: true
    })
  }

  mod.close = function() {
    state.set({
      path: "modal",
      value: false
    })
  }

  var bind = {}

  bind.focus = {
    loop: function(event) {
      var allElements = helper.e(".modal").querySelectorAll("[tabindex]")
      var firstElement = allElements[0]
      var lastElement = allElements[allElements.length - 1]
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
      if (!event.path.includes(helper.e(".modal"))) {
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

  var render = {}

  render.toggle = function(override) {
    if (state.get.current().modal) {
      render.open(override)
    } else {
      render.close()
    }
  }

  render.close = function() {
    var allModal = helper.eA(".modal")
    if (allModal[0]) {
      for (var i = 0; i < allModal.length; i++) {
        allModal[i].close()
      }
    }
    previousModal = null
  }

  render.open = function(override) {
    var options = {
      heading: "Modal",
      content: "Body",
      successAction: null,
      cancelAction: null,
      actionText: "OK",
      cancelText: "Cancel",
      size: "medium"
    }
    if (override) {
      options = helper.applyOptions(options, override)
    }
    var makeModal = function() {
      var body = helper.e("body")
      var modal = helper.node("div")
      var modalWrapper = helper.node("div|class:modal-wrapper")
      if (options.size == "large") {
        modal.setAttribute("class", "modal modal-large")
      } else if (options.size == "small") {
        modal.setAttribute("class", "modal modal-small")
      } else {
        modal.setAttribute("class", "modal")
      }
      modal.close = function() {
        if (modal.classList.contains("is-opaque")) {
          modal.classList.remove("is-opaque")
          modal.classList.add("is-transparent")
        } else {
          modal.remove()
        }
        bind.focus.remove()
      }
      var modalBody = helper.node("div|class:modal-body")
      var modalControls = helper.node("div|class:modal-controls form-group")
      var actionButton = helper.node("button:" + options.actionText + "|class:button button-line button-block form-group-item-half modal-button,tabindex:1")
      var cancelButton = helper.node("button:" + options.cancelText + "|class:button button-line button-block form-group-item-half modal-button,tabindex:1")
      modalControls.appendChild(cancelButton)
      modalControls.appendChild(actionButton)
      if (options.heading != null) {
        var modalHeading = helper.node("h1:" + options.heading + "|class:modal-heading,tabindex:1")
        modalBody.appendChild(modalHeading)
      }
      if (options.content) {
        if (typeof options.content == "string") {
          var container = helper.node("div|class:container")
          var para = helper.node("p:" + options.content)
          container.appendChild(para)
          modalBody.appendChild(container)
        } else {
          modalBody.appendChild(options.content)
        }
      }
      modalWrapper.appendChild(modalBody)
      modalWrapper.appendChild(modalControls)
      modal.appendChild(modalWrapper)
      modal.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this)
        }
      }.bind(modal))
      actionButton.addEventListener("click", function(event) {
        if (options.successAction) {
          options.successAction()
        }
        this.close()
      }.bind(modal))
      cancelButton.addEventListener("click", function(event) {
        if (options.cancelAction) {
          options.cancelAction()
        }
        close()
      }.bind(modal))
      previousModal = modal
      body.appendChild(modal)
      getComputedStyle(modal).opacity
      modal.classList.remove("is-transparent")
      modal.classList.add("is-opaque")
      modalHeading.focus(this)
    }
    if (previousModal != null) {
      render.close()
    }
    makeModal()
  }

  var open = function(override) {
    mod.open()
    render.open(override)
    bind.focus.add()
    bind.close.add()
  }

  var close = function() {
    mod.close()
    render.close()
    bind.focus.remove()
    bind.close.remove()
  }

  var init = function() {
    mod.close()
    render.close()
  }

  // exposed methods
  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    open: open,
    close: close
  }

})()
