const url = require('url')
const http = require('http')
const https = require('https')
const bl = require('bl')
var body = []


//console.log(process.argv);
var loop = 0;
//var count = 0;
/*process.argv.forEach( function(argv){
	
	if (argv && count > 1){
		
		var result = url.parse( argv )

		var protocol = result.protocol
		
		if( protocol === 'https:' ) { https.get( argv, response ) }else{ http.get( argv, response ) }
	}
	
	count++;
})*/

function httpGet(index){
	
	var loc = process.argv[2 + index];
	
	var result = url.parse( loc )

	var protocol = result.protocol
		
	if( protocol === 'https:' ) { https.get( loc, response ) }else{ http.get( loc, response ) }
	
}

function response(res){
	
	res.setEncoding('utf-8')
	
	res.pipe( bl( function( err, data){
		if (err) {
			return console.error(err)
		}
		
		body[loop] = data.toString()
		
		loop++
		
		if( loop === 3 ){
			printResult();
		}
		
	}))	
	
}

function printResult(){
	for(let i=0; i < 3; i++){
		console.log(body[i])
	}
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
