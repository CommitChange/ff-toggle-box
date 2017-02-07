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

var top = function top(state) {
  return (0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-top': '' }, on: { click: toggleId(state) } }, [state.top] || '');
};

var bottom = function bottom(state) {
  return (0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-bottom-wrapper': '' } }, [(0, _h2.default)('div', { attrs: { 'data-ff-toggle-box-bottom': '' } }, [state.bottom || ''])]);
};

module.exports = function (state) {
  return (0, _h2.default)('div', {
    attrs: { 'data-ff-toggle-box': state.open$()[state.id] ? 'is-open' : 'is-closed'
    }
  }, [top(state), bottom(state)]);
};
