var R = require('ramda');
var simpleCompareConcernFactory = require('../internal/simpleCompareConcernFactory');

module.exports = simpleCompareConcernFactory("max", R.identity, R.lte);
