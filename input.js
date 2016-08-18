const Keyboard = require('frp-keyboard')
const keycode = require('keycode')
const computed = require('observ/computed')

function createInput () {
  const keyboard = Keyboard()

  const changeSlide = computed([keyboard.keyDown], (num) => {
    return keycode(num) || 'void'
  })

  return changeSlide
}

module.exports = createInput
