var R = require('ramda');

module.exports = R.curry(function (first, second) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[first], obj[second]];
    return obj[first].length === obj[second];
  });
  fn["@@error"] = "match";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [first];
  return [fn];
});
