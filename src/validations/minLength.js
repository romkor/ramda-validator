var R = require('ramda');
var simpleCompareConcernFactory = require('../internal/simpleCompareConcernFactory');

module.exports = simpleCompareConcernFactory("minLength", R.length, R.lte);
