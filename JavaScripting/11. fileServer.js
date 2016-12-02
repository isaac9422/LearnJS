var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
var d = "";
var server = http.createServer(function (request, response){
	var data2 = fs.createReadStream(file);
	data2.pipe(response);
});
server.listen(port);
