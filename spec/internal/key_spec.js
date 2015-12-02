var key = require("../../src/internal/key");

describe("key", function () {
  var obj = {
    id: 1,
    user: {
      name: "Rob"
    }
  };

  it("should return value when first arg is string", function () {
    var getVal = key("id");
    expect(getVal(obj)).toBe(1);
  });

  it("should return value when first arg is array of single string", function () {
    var getVal = key(["id"]);
    expect(getVal(obj)).toBe(1);
  });

  it("should return value when first arg is array of strings", function () {
    var getVal = key(["user", "name"]);
    expect(getVal(obj)).toBe(obj.user.name);
  });

});
