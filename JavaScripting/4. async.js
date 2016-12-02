var fs = require('fs')
var br = fs.readFile(process.argv[2], function callback(err, data){
	if(err == null){
		var s = data.toString();
		var sp = s.split('\n')
		console.log(sp.length-1)
	}
}
)

