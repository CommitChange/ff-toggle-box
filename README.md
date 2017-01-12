# ff-toggle-box 

ff-toggle-box is comprised of a top section that is always visible, and a bottom section that can be toggled open or toggled close.

the top section has a click event attached to it that fires the toggling.

you can also toggle the bottom section for any of the toggle-boxes from your parent component's `toggleBoxIds$` stream.

demo: https://flimflamjs.github.io/ff-toggle-box/

usage:

```es6
import toggleBox from 'ff-toggle-box'

// your parent state object should have a key named `toggleBoxIDs$` with it's value set to a stream containing an object:
const init = () => ({ toggleBoxIDs$ : flyd.stream({}) })


const view = state =>
  h('div', [
    toggleBox({ 
      thisID: 'tb1'
    , parentState: state
    , top: h('div', 'Click to toggle')
    , bottom: h('div', 'This section is hidden by default')
    })
  ])
```

this component requires some minimal functional styling, which is included: https://github.com/flimflamjs/ff-toggle-box/blob/master/index.css. `postcss-import` is recommended for adding the styles to your project.

you can see the styles which were used for the demo here: https://github.com/flimflamjs/ff-toggle-box/blob/master/page.css






