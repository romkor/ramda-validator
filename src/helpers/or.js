var R = require('ramda');

//
module.exports = R.curry(function (fns, name) {
  var validationsMapped = R.chain(function (fn) {
    return fn(name);
  }, fns);

  var fn = function (obj) {
    return R.anyPass(validationsMapped)(obj);
  };
  fn["@@error"] = "or";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});
