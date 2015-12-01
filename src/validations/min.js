var R = require('ramda');

module.exports = R.curry(function (name, value) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name], value];
    return obj[name] >= value;
  });
  fn["@@error"] = "min";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});
