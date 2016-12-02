var fs = require('fs')
var br = fs.readFileSync(process.argv[2])
var s = br.toString();
var sp = s.split('\n')
console.log(sp.length-1)
