var R = require('ramda');

var validator = require("../../src/validator");
var permitAll = require("../../src/helpers/permitAll");
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
      permitAll(["id", "$id"])
    ]);
    var result = objValidate(obj);
    expect(result.valid).toBe(false);
    expect(result.fields.user.errors.permitParam).toBeTruthy();
  });


});