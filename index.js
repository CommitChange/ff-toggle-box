import R from 'ramda'
import flyd from 'flyd'
import h from 'snabbdom/h'

const toggleId = state => ev => {
  const ids = state.open$()
  const id = state.id
  state.open$(
    R.assoc(id, ids[id] ? false : true, ids)
  )
}

const top = state =>
  h('div', { attrs: {'data-ff-toggle-box-top': ''},  on: {click: toggleId(state)}}
  , [state.top] || '')


const bottom = state => 
 h('div'
  , {attrs: {'data-ff-toggle-box-bottom-wrapper': ''}}
  , [ h('div', {attrs: {'data-ff-toggle-box-bottom': ''}}, [state.bottom || '']) ])


module.exports = state => {
  return h('div'
  , {
      attrs: {'data-ff-toggle-box': state.open$()[state.id]
        ? 'is-open'
        : 'is-closed'
      }
    }
  , [
    top(state)
  , bottom(state)
  ])
}


