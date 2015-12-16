var R = require('ramda');

//
module.exports = R.curry(function (fns, name) {
  if (R.type(fns) !== "Array") TypeError("Argument fns should be an array");
  var validationsMapped = R.chain(function (fn) {
    if (R.type(fn) !== "Function") TypeError("Argument fn Should be a function");
    return fn(name);
  }, fns);

  var fn = R.allPass(validationsMapped);

  fn["@@error"] = "and";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});
