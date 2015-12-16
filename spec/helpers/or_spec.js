var R = require('ramda');

var or = require("../../src/helpers/or");
var validator = require("../../src/validator");
var field = require("../../src/helpers/field");
var minLength = require("../../src/validations/minLength");
var required = require("../../src/validations/required");
var string = require("../../src/validations/string");
var number = require("../../src/validations/number");
var boolean = require("../../src/validations/boolean");

// var compose = function () {
//   if (arguments.length === 0) throw TypeError("Should provide at least one function");
//   var fns = Array.prototype.slice.call(arguments);
//   return function (name) {
//     return R.chain(function (fn) {
//       return fn(name);
//     }, fns);
//   };
// };
//
// var obj = {
//   id: true,
//   body: "1",
//   user: {
//     name: "Rob"
//   }
// };
// //var textConcern = compose(required, string, minLength(R.__, 255));
// var textConcern = compose(required, compose(string, compose(minLength(R.__, 255))));
//
// var bodyConcern = textConcern("body");
// validate = validator([bodyConcern]);
// console.log("textConcern", JSON.stringify(validate(obj)));

describe("or", function () {
  var obj = {
    id: true,
    body: "Lorem ipsum dolor sit amet...",
    $id: 1,
    user: {
      name: "Rob"
    }
  };

  it("should return validation result object with false result", function () {
    var objValidate = validator([
      field("id", [
        or([number, string])
      ])
    ]);
    var result = objValidate(obj);
    expect(result.valid).toBe(false);
  });

  it("should return validation result object with true result", function () {
    var objValidate = validator([
      field("id", [
        or([number, string, boolean])
      ])
    ]);
    var result = objValidate(obj);
    expect(result.valid).toBe(true);
  });

});
