var R = require('ramda');

module.exports = function (options, fn) {
  fn["@@error"] = options.name;
  fn["@@enabled"] = R.T;
  fn["@@field"] = [options.field];
  return fn;
};
