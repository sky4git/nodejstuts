'use strict'

const http = require('http')
const fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]

http.createServer( function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(file).pipe(res)

}).listen(Number(port));