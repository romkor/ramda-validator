var R = require('ramda');
var _key = require('./key');
var meta = require('./meta');

module.exports = R.curry(function (type, regexp, name) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name]];
    return regexp.test(obj[name]);
  });
  fn = meta({
    name: type,
    field: name
  }, fn);
  return [fn];
});
