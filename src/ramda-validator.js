module.exports = {
  validator: require("./validator"),
  required: require("./validations/required"),
  permitAll: require("./validations/permitAll"),
  number: require("./validations/number"),
  min: require("./validations/min"),
  max: require("./validations/max"),
  minLength: require("./validations/minLength"),
  maxLength: require("./validations/maxLength"),
  rangeLength: require("./validations/rangeLength"),
  eq: require("./validations/eq"),
  lt: require("./validations/lt"),
  gt: require("./validations/gt"),
};
