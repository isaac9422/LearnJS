var htp = require('http')
var bl = require('bl')
s = ""
var request = process.argv[2]
htp.get(request, function (response){
	response.pipe(bl(function (err, data){
		console.log(data.length)
		console.log(data.toString())
		}))
	})
