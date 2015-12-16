var R = require('ramda');
var meta = require('../internal/meta');

//
module.exports = R.curry(function (fns, name) {
  if (R.type(fns) !== "Array") TypeError("Argument fns should be an array");
  var validationsMapped = R.chain(function (fn) {
    if (R.type(fn) !== "Function") TypeError("Argument fn Should be a function");
    return fn(name);
  }, fns);

  var fn = R.pipe(R.allPass(validationsMapped), R.not);

  fn = meta({
    name: "not",
    field: name
  }, fn);
  return [fn];
});
