var http = require('http');

var server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  switch(req.url){
    case '/about':
      res.write("Ini adalah halaman about");
      break;
    case '/profile':
      res.write("Ini adalah halaman profile");
      break;
    case '/produk':
      res.write("Ini adalah halaman produk");
      break;
    default:
      res.write("404: Halaman tidak ditemukan");
  }
  res.end();
});

server.listen(8000);

console.log("Server running on http://localhost:8000");
