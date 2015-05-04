var htp = require('http')
var bl = require('bl')
var s = []
var p = 0

function print(){
	for(var i=0;i<p;i++){
		console.log(s[i]);
	}
}

function analyse(i){
		htp.get(process.argv[i], function (response){
			response.pipe(bl(function (err, data){
				s[i-2] = data.toString();
				p++;
				if(p==3){
					print();
				}
			}))
		})
}

for(var i=2;i<process.argv.length;i++){
	analyse(i);
	}
