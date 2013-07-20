var express = require('express');

var buffer = Buffer(256);
var len = buffer.write(readFileSync("index.html", "utf-8"));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
