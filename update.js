function changeSlide (send, done, direction) {
  if (direction !== 'left' &&
      direction !== 'right') {
    return done()
  }

  send('update', {
    direction
  }, (err) => {
    done(err)
  })
}

module.exports = changeSlide
