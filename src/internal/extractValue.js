var R = require('ramda');

// extract("id", obj)
// extract(["user", "name"], obj)
// extract({"*": "*"}, obj)
module.exports = R.curry(function (name, obj) {
  var extractor =  R.type(name) == "Array" ? R.path(name) : R.prop(name);
  return extractor(obj);
});