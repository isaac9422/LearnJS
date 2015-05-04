var htp = require('http')
var request = process.argv[2]
htp.get(request, function (response){
	response.on("data", function (data){
		console.log(data.toString())
		})
	})
