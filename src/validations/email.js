var regexpConcernFactory = require('../internal/regexpConcernFactory');

module.exports = regexpConcernFactory(
  "email",
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
