var R = require('ramda');
var _key = require('../internal/key');
var meta = require('../internal/meta');

module.exports = function (name) {
  var fn = function (obj) {
    fn["@@context"] = [null];
    return R.pipe(
      _key(name), R.isNil, R.not
    )(obj);
  };
  fn = meta({
    name: "required",
    field: name
  }, fn);
  return [fn];
};
