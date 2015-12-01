var R = require('ramda');

module.exports = R.curry(function (name, min, max) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name].length, min, max];
    return obj[name].length >= min && obj[name].length <= max;
  });
  fn["@@error"] = "rangeLength";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});
