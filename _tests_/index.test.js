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

function initParent (top, bottom) {
  const state = {toggleBoxIDs$ : flyd.stream({})}

  const view = state => h('body', [
    toggleBox({ 
        thisID: 'tb1'
      , parentState: state
      , top
      , bottom
      })
    ])

  let container = document.createElement('div')
  let streams = render({patch, container, view, state})
  streams.state = state
  return streams
}

describe('ff-toggle-box', () => {

  it('it sets the innerHTML of the top element correctly', () => {
    const streams = initParent(h('h1', 'hello'), '')
    const html = streams.dom$().querySelector('[data-ff-toggle-box-top]').innerHTML
    expect(html).toEqual('<h1>hello</h1>')
  })

  it('it sets the innerHTML of the bottom element correctly', () => {
    const streams = initParent('', h('h1', 'hello'))
    const html = streams.dom$().querySelector('[data-ff-toggle-box-bottom]').innerHTML
    expect(html).toEqual('<h1>hello</h1>')
  })

  it('it correctly sets the is-open attribute', () => {
    const streams = initParent('', '')
    streams.state.toggleBoxIDs$({tb1: true})
    const isOpen = streams.dom$()
      .querySelector('[data-ff-toggle-box]')
      .getAttribute('data-ff-toggle-box')
    expect(isOpen).toEqual('is-open')
  })

  it('it correctly sets the is-closed attribute', () => {
    const streams = initParent('', '')
    streams.state.toggleBoxIDs$({tb1: false})
    const isClosed = streams.dom$()
      .querySelector('[data-ff-toggle-box]')
      .getAttribute('data-ff-toggle-box')
    expect(isClosed).toEqual('is-closed')
  })

  it('it sets the bottom-wrapper height to 0 when is-closed', () => {
    const streams = initParent('', h('h1', 'hello'))
    const height = streams.dom$().querySelector('[data-ff-toggle-box-bottom-wrapper]').style.height
    expect(height).toEqual('0px')
  })

  // TODO (fix: offsetHeight is returing undefined)
  // it('it sets the bottom-wrapper height to 0 when is-closed', () => {
  //   const streams = initParent('', h('div', [h('h1', 'hello')]))
  //   streams.state.toggleBoxIDs$({tb1: true})
  //   const offsetHeight = streams.dom$().querySelector('[data-ff-toggle-box-bottom]').offsetHeight
  //   const styleHeight = streams.dom$().querySelector('[data-ff-toggle-box-bottom-wrapper]').style.height
  //   console.log({offsetHeight, styleHeight})
  //   expect('0px').toEqual('0px')
  // })

})

