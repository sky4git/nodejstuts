var lsFunc = require('./lsmodule.js')

var folder = process.argv[2]
var ext = process.argv[3]


lsFunc( folder, ext, function( err, files){
	
	if( err ){
		return console.error( 'There was an error', err );
	}	
	
	files.forEach( function (file){
		console.log(file);
	})
	
});
	

		
		
		
	
