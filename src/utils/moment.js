var moment = require('moment');
var now = moment([]);
console.log(moment(now).isSame(moment(), 'second'));

var de7 = moment().add(-7, 'days');
console.log(moment().subtract(1, 'months').valueOf());
