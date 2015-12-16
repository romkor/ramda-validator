var R = require('ramda');
var simpleRelationConcernFactory = require('../internal/simpleRelationConcernFactory');

module.exports = simpleRelationConcernFactory("eq", R.equals);
