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
    h('div.box',  [toggleBox({ 
      thisID: 'toggleBox1'
    , parentState: state
    , top: h('h1', 'top 1') 
    , bottom: h('h1', 'bottom 1') 
    })])
  , h('div.box', [toggleBox({ 
      thisID: 'toggleBox2'
    , parentState: state
    , top: h('h1', 'top 2') 
    , bottom: h('h1', 'bottom 2') 
    })])
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

