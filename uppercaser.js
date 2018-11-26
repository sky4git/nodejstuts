'use strict'

const http = require('http')
const map = require('through2-map')

var port = process.argv[2]

http.createServer( (req, res) =>{

    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
     }
   

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)

}).listen(port)

//console.log('Browse to http://127.0.0.1:' + port)


/*const options = {
    hostname: 'localhost',
    port: port,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
http.request( 'http://localhost:3000', {  } )*/