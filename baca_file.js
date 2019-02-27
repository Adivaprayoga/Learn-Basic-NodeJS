var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){

    // baca file
    fs.readFile('index.html', (err, data) => {
        if(err) throw err;

        // kirim respon
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

});

server.listen(8000);

console.log("Server running on http://localhost:8000");
