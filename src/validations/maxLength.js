var R = require('ramda');

module.exports = R.curry(function (name, value) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name].length, value];
    return obj[name].length <= value;
  });
  fn["@@error"] = "maxLength";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});
