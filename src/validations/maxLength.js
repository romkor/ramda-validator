var R = require('ramda');
var simpleCompareConcernFactory = require('../internal/simpleCompareConcernFactory');

module.exports = simpleCompareConcernFactory("maxLength", R.length, R.gte);
