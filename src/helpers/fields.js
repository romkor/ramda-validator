var R = require('ramda');
var field = require('./field');

// Apply list of validations to list of fields
module.exports = R.curry(function (names, fns) {
  return R.chain(function (name) {
    return field(name, fns);
  }, names);
});
