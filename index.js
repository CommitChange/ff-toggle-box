import R from 'ramda'
import flyd from 'flyd'
import h from 'snabbdom/h'


module.exports = state => {
  return h('div'
  , {
      attrs: {'ff-toggle-box': ''}
    }
  , [
    h('div'
    , {
        attrs: {'ff-toggle-box-top': ''}
      , on: {click: toggleID(state)} 
      }
    , [state.top] || ''
    )
  , h('div'
    , {
        attrs: {'ff-toggle-box-bottom': ''}
      , class: {hide: !state.parentState.toggleBoxIDs$()[state.thisID]}
      }
    , [state.bottom] || ''
    )
  ])
}

const toggleID = state => ev => {
  const IDs = state.parentState.toggleBoxIDs$()
  const thisID = state.thisID

  state.parentState.toggleBoxIDs$(
    R.assoc(thisID, IDs[thisID] ? false : true, IDs)
  )
}

