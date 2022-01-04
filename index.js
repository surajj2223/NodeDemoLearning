const lodash = require('lodash');

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

const index = lodash.findIndex(users, function(o) { return o.user == 'fred'; });

console.log(index);