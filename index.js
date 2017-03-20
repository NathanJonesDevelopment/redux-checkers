var express = require('express');
var app = express();
var http = require('http').Server(app);

/*
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/build');
});
*/

app.use(express.static(__dirname + '/build'))

http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});