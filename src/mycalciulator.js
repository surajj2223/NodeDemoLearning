const _ = require('lodash');

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

const index = _.findIndex(users, function(o) { return o.user == 'barney'; });

console.log(index);