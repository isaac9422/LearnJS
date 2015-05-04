var http = require('http');
var url = require('url');
var port = process.argv[2];
var path = "/api/parsetime";
var path2 = "/api/unixtime";
var server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'application/json' });
	if(request.method === 'GET'){
		var data = url.parse(request.url, true);
		if(data.pathname === path){
			var date = new Date(data.query['iso']);
			var data2 = {
				hour : date.getHours(),
				minute : date.getMinutes(),
				second : date.getSeconds()}
		}
		else if(data.pathname === path2){
			var date = new Date(data.query['iso']);
			var data2 = {
				unixtime: date.getTime()}			
		}
		response.end(JSON.stringify(data2));
	}
	
});
server.listen(port);
