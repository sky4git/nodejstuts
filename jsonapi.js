'use strict'

const http = require('http')
const url = require('url')
const querystring = require('querystring')

var port = process.argv[2]
console.log(port)
http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    var parsedURL = url.parse(req.url)
    var urlPath = parsedURL.pathname
    var qParams = parsedURL.query
    var parsedQuery = querystring.parse( qParams )
   
    if( urlPath === '/api/parsetime' ) {  
        
    }  
    
    if( urlPath === '/api/unixtime' ) {  

    }

    res.end()

}).listen(port)

console.log('Browse to http://127.0.0.1:' + port)