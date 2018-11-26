const fs = require('fs');
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(process.argv[2], function(err, files){
	if (err) return console.error(err)
	//console.log(contents);
	files.forEach(function(file){
		if(path.extname(file) === ext){
			console.log(file)
		}
	})

});