var R = require('ramda');
var meta = require('../internal/meta');

module.exports = function(names) {
  var fn = function (obj) {
    return R.reduce(function(acc, cur){
      if (names.indexOf(cur) === -1) {
        fn["@@field"].push(cur);
        return false;
      }
    }, true, Object.keys(obj));
  };
  fn["@@field"] = [];
  fn = meta({
    name: "permitParam",
  }, fn);
  return [fn];
};
