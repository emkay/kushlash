# kushlash
Sliders

Slide shows as functions.

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![built with choo v3](https://img.shields.io/badge/built%20with%20choo-v3-ffc3e4.svg?style=flat-square)](https://github.com/yoshuawuyts/choo)

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
