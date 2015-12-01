var R = require('ramda');
var _key = require('../internal/key');

module.exports = function (name) {
  var fn = function (obj) {
    fn["@@context"] = [null];
    return R.pipe(
      _key(name), R.isNil, R.not
    )(obj);
  };
  fn["@@error"] = "required";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
};
