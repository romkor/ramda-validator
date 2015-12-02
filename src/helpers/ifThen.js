var R = require('ramda');

module.exports = R.curry(function (condition, action) {
  return R.chain(function (fn) {
    fn["@@enabled"] = R.allPass(condition);
    return fn;
  }, action);
});
