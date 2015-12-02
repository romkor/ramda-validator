var R = require('ramda');

// Apply validation to list of fields
module.exports = R.curry(function (fn, names) {
  return R.chain(fn, names);
});
