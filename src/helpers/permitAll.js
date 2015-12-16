var R = require('ramda');

module.exports = function(names) {
  var fn = function (obj) {
    return R.reduce(function(acc, cur){
      if (names.indexOf(cur) === -1) {
        fn["@@field"].push(cur);
        return false;
      }
    }, true, R.keys(obj));
  };
  fn["@@error"] = "permitParam";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [];
  fn["@@context"] = [names];
  return [fn];
};
