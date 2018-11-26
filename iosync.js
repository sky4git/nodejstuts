var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var str = file.toString();

var arr = str.split('\n');

var arrLength = arr.length - 1;

console.log(arrLength);
