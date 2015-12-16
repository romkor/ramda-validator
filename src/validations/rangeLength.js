var R = require('ramda');
var meta = require('../internal/meta');

module.exports = R.curry(function (min, max, name) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name].length, min, max];
    return obj[name].length >= min && obj[name].length <= max;
  });
  fn = meta({
    name: "rangeLength",
    field: name
  }, fn);
  return [fn];
});
