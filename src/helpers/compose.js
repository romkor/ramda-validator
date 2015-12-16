var R = require('ramda');
var field = require('./field');

module.exports = function () {
  if (arguments.length === 0) throw TypeError("Should provide at least one function");
  var fns = Array.prototype.slice.call(arguments);
  return field(R.__, fns);
};
