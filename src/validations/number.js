var R = require('ramda');

module.exports = function (name) {
  var fn = (function (obj) {
    fn["@@context"] = [R.type(obj[name])];
    return R.type(obj[name]) == "Number";
  });
  fn["@@error"] = "number";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
};
