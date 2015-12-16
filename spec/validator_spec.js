var R = require('ramda');

var field = require("../src/helpers/field");
var validator = require("../src/validator");
var minLength = require("../src/validations/minLength");
var required = require("../src/validations/required");
var eq = require("../src/validations/eq");

describe("validator", function () {
  var obj = {
    id: '123456789',
    $id: '1',
    user: {
      name: "Rob"
    }
  };

  it("should return validation result object with false result", function () {
    var objValidate = validator([
      //required("id"),
      eq("$id", "id"),
      field("id", [minLength(9)])
    ]);
    var result = objValidate(obj);
    expect(result.valid).toBe(false);
    //expect(result.fields.id.errors.eq).toBeTruthy();
  });

});
