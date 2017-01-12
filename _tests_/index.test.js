import flyd from 'flyd'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'flimflam-render'
const patch = snabbdom.init([
  require("snabbdom/modules/class").default
, require("snabbdom/modules/style").default
, require("snabbdom/modules/props").default
, require("snabbdom/modules/eventlisteners").default
, require("snabbdom/modules/attributes").default
])

import toggleBox from '../index.js'

function initParent (top, bottom, IDs) {
  const state = {toggleBoxIDs$ : flyd.stream(IDs)}

  const view = state => h('body', [
    toggleBox({ 
        thisID: 'tb1'
      , parentState: state
      , top
      , bottom
      })
    ])

  const container = document.body
  let streams = render({patch, container, view, state})
  streams.state = state
  return streams
}

const q = s => document.querySelector(s)

describe('ff-toggle-box', () => {

  it('it sets the innerHTML of the top element correctly', () => {
    const streams = initParent(h('h1', 'hello'), '', {})
    const html = streams.dom$().querySelector('[data-ff-toggle-box-top]').innerHTML
    expect(html).toEqual('<h1>hello</h1>')
  })


})

