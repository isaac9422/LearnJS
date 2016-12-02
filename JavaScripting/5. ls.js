var dir = process.argv[2]
var ext = process.argv[3]
ext = '.'+ext
var fs = require('fs')
var path = require('path')
fs.readdir(dir, function callback(err, list){
	if(err == null){
		for(i = 0; i<list.length;i++){
			var s = path.extname(list[i])
			if(s == ext){
				console.log(list[i])	
			}
		}
	}
}
)
