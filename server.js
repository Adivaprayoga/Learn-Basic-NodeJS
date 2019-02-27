var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1> Hello Word </h1>");
  res.end(txt);
});

server.listen(8000);

console.log("Server running on http://localhost:8000");
