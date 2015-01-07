var fs = require('fs');

fs.readFile('readme.md', function(er, data) {
	console.log(data.toString());
})

console.log("Complete...");