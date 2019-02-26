var http = require('http');

var server = http.createServer(function (req, res){
  res.end("Hi, Selamat datang di NodeJs");
});

server.listen(8000);

console.log("Server running on http://localhost:8000");
