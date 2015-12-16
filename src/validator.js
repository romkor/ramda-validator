var R = require('ramda');

var validatorEngine = function (validation, result, target) {
  // Break if validation is disabled or validation pass
  if (!validation["@@enabled"](target) || validation(target)) return result;
  result.valid = false;
  validation["@@field"].forEach(function (field) {
    if (result.fields[field] === undefined) {
      result.fields[field] = {errors: {}};
    }
    result.fields[field].errors[validation["@@error"]] = validation["@@context"];
  });
  return result;
};

module.exports = R.curry(function (fns, obj) {
  return R.reduce(function (acc, validation) {
    return validatorEngine(validation, acc, obj);
  }, {valid: true, fields: {}}, R.flatten(fns));
});
