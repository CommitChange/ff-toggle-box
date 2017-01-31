# ff-toggle-box 

ff-toggle-box is comprised of a top section that is always visible, and a bottom section that can be toggled open or toggled close.

the top section has a click event attached to it that fires the toggling.

demo: https://flimflamjs.github.io/ff-toggle-box/

usage:

```es6
import toggleBox from 'ff-toggle-box'

const view = state =>
  h('div', [
    toggleBox({ 
      id: 'tb1'
    , open$: state.open$ // should be a stream containing an object
    , top: h('div', 'Click to toggle')
    , bottom: h('div', 'This section is hidden by default')
    })
  ])
```

this component requires some minimal functional styling, which is included: https://github.com/flimflamjs/ff-toggle-box/blob/master/index.css. `postcss-import` is recommended for adding the styles to your project.

you can see the styles which were used for the demo here: https://github.com/flimflamjs/ff-toggle-box/blob/master/page.css






