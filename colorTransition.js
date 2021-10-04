'use strict'

const COLOR_CHANGE_RATE = 5 // seconds

const observer = new MutationObserver((_, instance) => {
  const sideBarSelector = document.querySelector('.side-bar')
  if (sideBarSelector) {
    start(sideBarSelector)
    instance.disconnect() // stop observing
    return
  }
})

observer.observe(document, {
  childList: true,
  subtree: true
})

const setColor = (selector) => {
    const secondsFromEpoch = Math.round(new Date().getTime() / 1000)
    const hue = Math.round(secondsFromEpoch / COLOR_CHANGE_RATE) % 360
    selector.style.backgroundColor = `hsl(${hue}, 77%, 86%)`
}

const start = (selector) => {
    setColor(selector)
    setInterval(() => {
        setColor(selector)
    }, COLOR_CHANGE_RATE * 1000)
}
