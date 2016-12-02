var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.get('/home', function(req, res){
   res.end(process.argv[3]+"\n");
   res.render('index', {date: new Date().toStringDate()});	
	});
app.listen(+process.argv[2]);
