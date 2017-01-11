import R from 'ramda'
import flyd from 'flyd'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'flimflam-render'

import toggleBox from './index.js'

function init() {
  let state = {
    toggleBoxIDs$ : flyd.stream({})
  }

  flyd.map(x => console.log(x), state.toggleBoxIDs$)

  return state
}

function view(state) {
  return h('div', [
    toggleBox({ 
      thisID: 'toggleBox'
    , parentState: state
    , top: h('h1', 'top') 
    , bottom: h('h1', 'bottom') 
    })
  ])
}

const patch = snabbdom.init([
  require("snabbdom/modules/class").default
, require("snabbdom/modules/style").default
, require("snabbdom/modules/props").default
, require("snabbdom/modules/eventlisteners").default
, require("snabbdom/modules/attributes").default
])

const container = document.querySelector('#container')

const state = init()

render({patch, container, view, state})

