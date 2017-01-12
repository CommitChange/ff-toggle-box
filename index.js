import R from 'ramda'
import flyd from 'flyd'
import h from 'snabbdom/h'


const toggleID = state => ev => {
  const IDs = state.parentState.toggleBoxIDs$()
  const thisID = state.thisID
  state.parentState.toggleBoxIDs$(
    R.assoc(thisID, IDs[thisID] ? false : true, IDs)
  )
}


const setHeight = state => node => {
  const isOpen = state.parentState.toggleBoxIDs$()[state.thisID]
  const elm = node.elm
  const height = elm.querySelector('[data-ff-toggle-box-bottom]').offsetHeight
  if(isOpen) {
    elm.style.height = height + 'px'
  } else {
    elm.style.height = 0 
  }
}


const top = state =>
  h('div', { attrs: {'data-ff-toggle-box-top': ''},  on: {click: toggleID(state)}}
  , [state.top] || '')


const bottom = state => 
 h('div'
  , {attrs: {'data-ff-toggle-box-bottom-wrapper': ''}
    , hook: {
        update: setHeight(state)
      , insert: vnode => {
          window.addEventListener('resize', ev => setHeight(state)(vnode)) 
        }
    }}
  , [ h('div', {attrs: {'data-ff-toggle-box-bottom': ''}}, [state.bottom || '']) ])


module.exports = state => {
  return h('div'
  , {
      attrs: {'data-ff-toggle-box': state.parentState.toggleBoxIDs$()[state.thisID]
        ? 'is-open'
        : 'is-closed'
      }
    }
  , [
    top(state)
  , bottom(state)
  ])
}


