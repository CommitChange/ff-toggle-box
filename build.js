'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _flyd = require('flyd');

var _flyd2 = _interopRequireDefault(_flyd);

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleID = function toggleID(state) {
  return function (ev) {
    var IDs = state.parentState.toggleBoxIDs$();
    var thisID = state.thisID;
    state.parentState.toggleBoxIDs$(_ramda2.default.assoc(thisID, IDs[thisID] ? false : true, IDs));
  };
};

var setHeight = function setHeight(state) {
  return function (node) {
    var isOpen = state.parentState.toggleBoxIDs$()[state.thisID];
    var elm = node.elm;
    var height = elm.querySelector('[data-ff-toggle-box-bottom]').offsetHeight;
    if (isOpen) {
      elm.style.height = height + 'px';
    } else {
      elm.style.height = 0;
    }
  };
};

var top = function top(state) {
  return (0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-top': '' }, on: { click: toggleID(state) } }, [state.top] || '');
};

var bottom = function bottom(state) {
  return (0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-bottom-wrapper': '' },
    hook: {
      update: setHeight(state),
      insert: function insert(vnode) {
        window.addEventListener('resize', function (ev) {
          return setHeight(state)(vnode);
        });
      }
    } }, [(0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-bottom': '' } }, [state.bottom || ''])]);
};

module.exports = function (state) {
  return (0, _h2.default)('div', {
    attrs: { 'data-ff-toggle-box': state.parentState.toggleBoxIDs$()[state.thisID] ? 'is-open' : 'is-closed'
    }
  }, [top(state), bottom(state)]);
};
