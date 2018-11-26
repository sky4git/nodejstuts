const url = require('url')
const http = require('http')
const https = require('https')



var sentURL = process.argv[2]
var showValues = process.argv[3]

var result = url.parse(sentURL)

var protocol = result.protocol

console.log('Protocol: '+protocol)
console.log( '________________________________________' )

if( protocol === 'https:' ) { https.get( sentURL, response ) }else{ http.get( sentURL, response ) }


function response(res){
	//res.setEncoding('utf-8')
	//console.log('headers:', res.headers);
	
	for (var key in res.headers){
		if(res.headers.hasOwnProperty(key)){
			if( showValues === 'showvalues' ){
				console.log( key.toUpperCase() + ':' + res.headers[key] )
			}else{
				console.log( key.toUpperCase() )			
			}
			console.log( '-----------------------------------------------------' )
		}
	}
	
	//console.table(res.headers)	
	
}