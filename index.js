const choo = require('choo')
const html = require('choo/html')
const app = choo()

const Input = require('./input')
const update = require('./update')

module.exports = function (slides) {
  app.model({
    state: {
      slide: 0,
      slideLen: slides.length,
      percent: 0
    },
    reducers: {
      update: (data, state) => ({slide: data.slide, percent: data.percent})
    }
  })

  const input = Input()
  const mainView = (state, prev, send) => {
    input((k) => {
      console.log(k)
      update(state, k, send)
    })

    return html`
      <main>
        ${slides[state.slide](state)}
      </main>
    `
  }

  app.router((route) => [
    route('/', mainView)
  ])

  const tree = app.start()
  document.body.appendChild(tree)
}
