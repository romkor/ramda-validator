var R = require('ramda');
var _key = require('./key');
var meta = require('./meta');

module.exports = R.curry(function (relationName, relationCheckFn, second, first) {
  var fn = (function (obj) {
    var firstVal = _key(first)(obj);
    var secondVal = _key(second)(obj);
    fn["@@context"] = [firstVal, secondVal];
    return relationCheckFn(firstVal, secondVal);
  });
  fn = meta({
    name: relationName,
    field: first
  }, fn);
  return [fn];
});
