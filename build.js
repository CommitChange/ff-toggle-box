'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _flyd = require('flyd');

var _flyd2 = _interopRequireDefault(_flyd);

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleId = function toggleId(state) {
  return function (ev) {
    var ids = state.open$();
    var id = state.id;
    state.open$(_ramda2.default.assoc(id, ids[id] ? false : true, ids));
  };
};

var setHeight = function setHeight(state) {
  return function (node) {
    var isOpen = state.open$()[state.id];
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
  return (0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-top': '' }, on: { click: toggleId(state) } }, [state.top] || '');
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
    attrs: { 'data-ff-toggle-box': state.open$()[state.id] ? 'is-open' : 'is-closed'
    }
  }, [top(state), bottom(state)]);
};
