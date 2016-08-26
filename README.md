# kushlash
Sliders

Slide shows as functions. 

## Install

`npm i kushlash`

## Use

```javascript
const kushlash = require('kushlash')
const yo = require('yo-yo')

function slide (state) {
  return yo`<div id="app">
    <div class="main">
      <div class="row">
        <div class="item">
          <h1>Kushlash</h1>
          <h2>or Sliderz</h2>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <p>By Michael Matuzak</p>
        </div>
      </div>
    </div>
  </div>`
}

function slide2 (state) {
  return yo`<div id="app">
    <div class="main">
      <div class="row">
        <div class="item">
          <h1>Kushlash</h1>
          <h2>or Sliderz</h2>
        </div>
      </div>
    </div>
  </div>`
}

const slides = [
  slide,
  slide2
]

kushlash(slides)
```
