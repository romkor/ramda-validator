var R = require('ramda');

// Apply list of validations to one field
module.exports = R.curry(function (name, fns) {
  return R.chain(function (fn) {
    return fn(name);
  }, fns);
});
