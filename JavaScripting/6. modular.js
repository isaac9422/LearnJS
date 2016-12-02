var mmodule = require('./module.js')
mmodule(process.argv[2], process.argv[3], function(err, module){
	if( err != null ){
	 	console.log(err)
	}
	else{
		for(i = 0;i<module.length;i++){
			console.log(module[i])
		}
	}
})
