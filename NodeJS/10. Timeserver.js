var time = require('strftime');
var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket){
	var data = time('%Y-%m-%d %H:%M%n');
	socket.end(data);
});
server.listen(port);
