var R = require('ramda');

module.exports = function (name) {
  return R.type(name) == "Array" ? R.path(name) : R.prop(name);
};
