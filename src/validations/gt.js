var R = require('ramda');
var simpleRelationConcernFactory = require('../internal/simpleRelationConcernFactory');

module.exports = simpleRelationConcernFactory("gt", R.gt);
