var os = require('os');
var message = 'System information';

var sysarray = new Array(
    'Type: '+os.type(),
    'Node Version: '+process.version,
    'Platform: '+os.platform(),
    'Total Memory: '+os.totalmem(),
    'Free Memory: '+os.freemem(),
    'Uptime: '+os.uptime()
    
    
);

console.log(message);

for (var i = 0; i< sysarray.length;i++) {
   console.log(sysarray[i]);
}