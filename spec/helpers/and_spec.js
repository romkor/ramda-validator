var R = require('ramda');

var and = require("../../src/helpers/and");
var validator = require("../../src/validator");
var field = require("../../src/helpers/field");
var min = require("../../src/validations/min");
var minLength = require("../../src/validations/minLength");
var required = require("../../src/validations/required");
var string = require("../../src/validations/string");
var number = require("../../src/validations/number");
var boolean = require("../../src/validations/boolean");

describe("and", function () {
  var obj = {
    id: "123",
    $id: 5,
    user: {
      name: "Rob"
    }
  };

  it("should return validation result object with false result", function () {
    var objValidate = validator([
      field("id", [
        and([number, minLength(4)])
      ])
    ]);
    var result = objValidate(obj);
    expect(result.valid).toBe(false);
  });

  it("should return validation result object with true result", function () {
    var objValidate = validator([
      field("id", [
        and([required, string, minLength(3)])
      ]),
      field("$id", [
        min(3)
      ])
    ]);
    var result = objValidate(obj);
    console.log("result", result);
    expect(result.valid).toBe(true);
  });

});
