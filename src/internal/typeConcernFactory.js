var R = require('ramda');
var _key = require('./key');
var meta = require('./meta');

module.exports = R.curry(function (type, name) {
  var fn = (function (obj) {
    var val = _key(name)(obj);
    var propType = R.type(val);
    fn["@@context"] = [propType];
    return propType === type;
  });
  fn = meta({
    name: type.toLowerCase(),
    field: name
  }, fn);
  return [fn];
});
