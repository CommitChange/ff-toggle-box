import flyd from 'flyd'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'flimflam-render'

import toggleBox from './index.js'

function init() {
  return {
    open$: flyd.stream({})
  }
}

const top = () =>
  h('div.table', [
    h('h2.table-cell', 'click me')
  , h('i.table-cell.material-icons', 'keyboard_arrow_right')
  ]) 

function view(state) {
  return h('div', [
    h('div.box', [toggleBox({ 
      open$: state.open$
    , id: 'tb1'
    , top: top() 
    , bottom: h('p', 'Lorem ipsum dolor sit amet, vis vocibus maluisset an, ius liber numquam in. Debitis minimum signiferumque ut pri, officiis contentiones eu vix, mel no quot maiestatis persequeris. Ei duo natum possit verterem, te oratio labores sententiae vis. Mea omnes utamur ad, nam dictas delicata et. Assum sententiae eam in, ne eam persius labitur. Cu ignota perpetua vix, lorem prodesset ei vel. Intellegat rationibus complectitur vis ei, qui ut ullum saepe. Usu falli erant et, te tantas percipitur accommodare eos, mel no dicit aperiri. Eripuit omnesque mediocrem et his, ne cum omnis summo scriptorem, oportere comprehensam ei duo. Cibo augue reprehendunt mea et. An quo graeci omittantur, delectus cotidieque ne eum. Lucilius vituperatoribus vel ea. Mel quaeque temporibus id, ei sit oportere expetenda repudiandae. Ut graeci signiferumque vis, putant theophrastus at quo. Id ius ludus eligendi voluptaria. Te pri commodo maiorum, labores definiebas an cum, et labores repudiandae deterruisset sea. Soleat electram consequuntur ius ne, indoctum assueverit cu vis, in pro epicuri adipiscing percipitur. Nec tation conceptam consectetuer no, quo decore appareat euripidis no. Mei id solet discere intellegebat, eu sed quas tritani facilis. Mel ei eruditi dissentiet adversarium, mea ut veri equidem. Vel corpora mandamus in, vel no etiam audiam delicatissimi. Ea vocent habemus assentior per.') 
    })])
  ])
}

const patch = snabbdom.init([
  require("snabbdom/modules/style").default
, require("snabbdom/modules/props").default
, require("snabbdom/modules/eventlisteners").default
, require("snabbdom/modules/attributes").default
])

const container = document.querySelector('#container')

const state = init()

render({patch, container, view, state})

