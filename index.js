const mercury = require('mercury')
const Input = require('./input')
const State = require('./state')
const Update = require('./update')

module.exports = function (slides) {
  function render (state) {
    const slide = Slides(slides, state)
    return slide(state)
  }

  function createApp () {
    const events = Input()
    const state = State(events, {slideLen: slides.length})
    events(Update.changeSlide.bind(null, state))

    return state
  }

  const state = window.state = createApp()
  mercury.app(document.body, state, render)
}

function Slides (slides, state) {
  return slides[state.slide]
}
