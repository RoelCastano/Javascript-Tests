var express = require('express');
var url = require('url');

var app = express();

app.get('/tweets/:username', function(request, response) {
	var username = request.params.username;

	options = {
		protocol: "http:",
		host: 'api.twitter.com',
		pathname: '/1.1/statuses/user_timeline.json',
		query: {screen_name: username, count:10}
	}

	var twitterUrl = url.format(options);
	console.log(twitterUrl);
	request(twitterUrl).pipe(response);
});

app.listen(8080);

