const choo = require('choo')
const html = require('choo/html')
const app = choo()

const Input = require('./input')
const update = require('./update')

module.exports = function (slides) {
  const input = Input()

  app.model({
    state: {
      slide: 0,
      slideLen: slides.length,
      percent: 0
    },
    subscriptions: [
      (send, done) => {
        input(update.bind(null, send, done))
      }
    ],
    reducers: {
      update: (data, state) => {
        const direction = data.direction
        let newSlide = state.slide

        if (direction === 'right') {
          if (state.slide < state.slideLen - 1) {
            newSlide = state.slide + 1
          }
        } else if (direction === 'left') {
          if (state.slide > 0) {
            newSlide = state.slide - 1
          }
        }

        const percent = newSlide === 0 ? 0 : (newSlide / (state.slideLen - 1)) * 100
        return {slide: newSlide, percent: percent}
      }
    }
  })

  const mainView = (state, prev, send) => {
    return html`
      <main>
        <div style="background-color: #666; padding: 3px;" class="progress">
          <div style="background-color: lightblue; height: 20px; width: ${state.percent}%;"></div>
        </div>
        <article>
          <section>
            ${slides[state.slide](state)}
          </section>
        </article>
      </main>
    `
  }

  app.router((route) => [
    route('/', mainView)
  ])

  const tree = app.start()
  document.body.appendChild(tree)
}
