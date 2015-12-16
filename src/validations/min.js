var R = require('ramda');
var simpleCompareConcernFactory = require('../internal/simpleCompareConcernFactory');

module.exports = simpleCompareConcernFactory("min", R.identity, R.gte);
