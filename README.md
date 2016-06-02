# kushlash
Sliders

Slide shows as functions using `virtual-hyperscript`.

## Install

`npm i kushlash`

## Use

```javascript
const kushlash = require('..')
const mercury = require('mercury')
const h = mercury.h

const slides = [
  slide1,
  slide2
]

function slide1 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [h('h1', 'Kushlash'), h('h2', 'or Sliderz')])
      ])
    ])
  ])
}

function slide2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [h('h1', 'Kushlash'), h('h2', 'or Sliderz')])
      ]),

      h('div.row', [
        h('div.item', [
          h('p', 'By Michael Matuzak')
        ])
      ])
    ])
  ])
}

kushlash(slides)
```
