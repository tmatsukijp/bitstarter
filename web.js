var express = require('express');
var fs = require('fs');

var buffer = Buffer(3000);
var len = buffer.write(fs.readFileSync("index.html", "utf-8"));
var len = 13000;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
