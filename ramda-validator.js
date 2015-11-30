var _key = function (name) {
  return R.type(name) == "Array" ? R.path(name) : R.prop(name);
};

// Validations
var required = (function (name) {
  var fn = function (obj) {
    fn["@@context"] = [null];
    return R.pipe(
      _key(name), R.isNil, R.not
    )(obj);
  };
  fn["@@error"] = "required";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var number = (function (name) {
  var fn = (function (obj) {
    fn["@@context"] = [R.type(obj[name])];
    return R.type(obj[name]) == "Number";
  });
  fn["@@error"] = "number";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var min = R.curry(function (name, value) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name], value];
    return obj[name] >= value;
  });
  fn["@@error"] = "min";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var max = R.curry(function (name, value) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name], value];
    return obj[name] <= value;
  });
  fn["@@error"] = "max";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var minLength = R.curry(function (name, value) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name].length, value];
    return obj[name].length >= value;
  });
  fn["@@error"] = "minLength";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var maxLength = R.curry(function (name, value) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name].length, value];
    return obj[name].length <= value;
  });
  fn["@@error"] = "maxLength";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var rangeLength = R.curry(function (name, min, max) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[name].length, min, max];
    return obj[name].length >= min && obj[name].length <= max;
  });
  fn["@@error"] = "rangeLength";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [name];
  return [fn];
});

var match = R.curry(function (first, second) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[first], obj[second]];
    return obj[first].length === obj[second];
  });
  fn["@@error"] = "match";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [first];
  return [fn];
});

var greaterThan = R.curry(function (first, second) {
  var fn = (function (obj) {
    fn["@@context"] = [obj[first], obj[second]];
    return obj[first].length >= obj[second];
  });
  fn["@@error"] = "greaterThan";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [first];
  return [fn];
});

// Apply validation to list of fields
var all = R.curry(function (fn, names) {
  return R.chain(fn, names);
});

var requireAll = all(required);

// Apply list of validations to one field
var field = R.curry(function(name, fns) {
  return R.chain(function(fn) {
    return fn(name);
  }, fns);
});

// Apply list of validations to list of fields
var fields = R.curry(function(names, fns) {
  return R.chain(function(name) {
    return field(name, fns);
  }, names);
});

// Check if target has not permitted fields
var permitAll = R.curry(function(names) {
  var fn = function (obj) {
      return R.reduce(function(acc, cur){
        if (names.indexOf(cur) === -1) {
          fn["@@field"].push(cur);
          return false;
        }
      }, true, Object.keys(obj));
    };
  fn["@@error"] = "permitParam";
  fn["@@enabled"] = R.T;
  fn["@@field"] = [];
  fn["@@context"] = [names];
  return [fn];
});

var ifThen = R.curry(function (condition, action) {
  return R.chain(function (fn) {
    fn["@@enabled"] = R.allPass(condition);
    return fn;
  }, action);
});

// Validator
var validatorEngine = function (validation, result, target) {
  // Break if validation is disabled or validation pass
  if ( !validation["@@enabled"](target) || validation(target) ) return;
  result.valid = false;
  validation["@@field"].forEach(function (field) {
    if (result.fields[field] === undefined) {
      result.fields[field] = {errors: {}};
    }
    result.fields[field].errors[validation["@@error"]] = validation["@@context"];
  });
};

var validator = R.curry(function (fns, obj) {
  return R.reduce(function (acc, cur){
    cur.forEach(function (fn) {
      validatorEngine(fn, acc, obj);
    });
    return acc;
  }, {valid: true, fields:{}}, fns);
});

// var mock = {
//   id: null,
//   slug: "boom",
//   name: "o",
//   full_name: "null",
//   description: 'Blah blah blah',
//   start: 10,
//   end: 9,
//   user_id: null,
//   user: {
//     id: null
//   },
//   remaining_amount: null,
//   password: "***8",
//   password_repeat: "****"
// };

//var validateModel = validator([
  //required("id")
  // Allow only following fields / add error to all fields that are not in list.
  //permitAll(["id", "name", "description"]),
  //requireAll(["name", "remaining_amount", "user_id", ["user", "id"]]),
  //field("id", [required, number]),
  //field("name", [required, minLength(R.__, 4), maxLength(R.__, 10)]),
  //fields(["id", "start"], [required, number, max(R.__, 9)]),
  //rangeLength("description", 3, 10),
  //greaterThan("start", "end"),
  //match("password", "password_repeat"),
  //ifThen(required("name"), required("full_name")),
  //ifElse(required("id"), required("slug"), required("something"))
//]);

//console.log((validateModel(mock)));

//TODO:
//Write tests
//Add more validators
