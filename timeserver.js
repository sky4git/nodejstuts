const net = require('net');

var port = process.argv[2]

function zeroFill (i) {
	return (i < 10 ? '0' : '') + i
}

function now () {
	const d = new Date()
	return d.getFullYear() + '-' +
	  zeroFill(d.getMonth() + 1) + '-' +
	  zeroFill(d.getDate()) + ' ' +
	  zeroFill(d.getHours()) + ':' +
	  zeroFill(d.getMinutes())
}

const server = net.createServer( (socket) => {
	//console.log('client connected');	
	//socket.write('you are on!\n\rTest');
	socket.end(now() + '\n')
	/*socket.on('end', () => {
		console.log('client disconnected');
	})*/	
	//socket.pipe(socket)
})

server.listen( port, () => {
	//console.log('server bound');
})