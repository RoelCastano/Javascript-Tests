// var server = require('http');

// server.createServer(function(request, response) {
// 	response.writeHead(200);
// 	request.on('data', function(chunk) {
// 		console.log(chunk);
// 		response.write(chunk);
// 	});

// 	request.on('end', function() {
// 		response.end();
// 	});
// }).listen(8080);

var server = require('http');

server.createServer(function(request, response) {
	response.writeHead(200);
	request.pipe(response);
}).listen(8080);