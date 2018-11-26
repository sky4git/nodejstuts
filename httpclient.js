var http = require('http');


var options = {
  hostname: process.argv[2],
  port: 80,
};

//console.log(options);
http.get( options.hostname, function(res) {
	//console.log("fetching: "+options.hostname);
	
	res.setEncoding('utf8');
	//console.log('STATUS: ' + res.statusCode);
	/*res.headers.forEach( function(header){
		console.log(header);
	})*/
	//console.log(res.headers)
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.on('data', function(chunk){
		console.log( chunk);
	})
	res.on('error', console.error )
	res.on('end', function(){
		// console.log('request ended: ' + e);
	})
	
	
});