var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, contents){
	if (err) {
		return console.log(err)
	}  
	 const lines = contents.toString().split('\n').length - 1
	 console.log(lines)
	//var arr = stri.split('\n');

	//var arrLength = arr.length - 1;

	//console.log(arrLength);
});


