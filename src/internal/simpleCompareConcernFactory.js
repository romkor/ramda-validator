var R = require('ramda');
var _key = require('./key');
var meta = require('./meta');

module.exports = R.curry(function (compareName, extractValueFn, compareCheckFn, value, fieldName) {
  var fn = (function (obj) {
    var fieldVal = extractValueFn(_key(fieldName)(obj));
    fn["@@context"] = [fieldVal, value];
    return compareCheckFn(fieldVal, value);
  });
  fn = meta({
    name: compareName,
    field: fieldName
  }, fn);
  return [fn];
});