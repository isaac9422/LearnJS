module.exports = function ls(dir, ext, regre){
var fs = require('fs')
var path = require('path')
ext = '.'+ext
fs.readdir(dir, function (err, list){
	if(err == null){
		var ls = []
		for(i = 0; i<list.length;i++){
			var s = path.extname(list[i])
			if(s == ext){
				ls[ls.length] = list[i]
			}
		}
		return regre(null,ls)
	}
	else{
		return regre(err)
	}
})
}

