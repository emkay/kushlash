function changeSlide (state, direction, send) {
  let newSlide = state.slide

  if (direction === 'void') {
    return
  }

  if (direction === 'right') {
    if (state.slide < state.slideLen - 1) {
      newSlide += 1
    }
  } else if (direction === 'left') {
    if (state.slide > 0) {
      newSlide -= 1
    }
  }

  const percent = newSlide === 0 ? 0 : (newSlide / (state.slideLen - 1)) * 100
  send('update', {
    slide: newSlide,
    percent: percent
  })
}

module.exports = changeSlide
