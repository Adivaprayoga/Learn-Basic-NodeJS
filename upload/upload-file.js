var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

var server = http.createServer(function (req, res){

    // kirim upload file
    if(req.url === "/" && req.method === "GET"){
      fs.readFile("form-upload.html", (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(err) throw err;
        res.end(data);
      });
    }

    // upload file
    if(req.url == "/" && req.method == "POST"){
      // membuat objek formidable
      var form = new formidable.IncomingForm();

      // menangani upload file
      form.parse (req, function (err, fields, files){
        var oldpath = files.filetoupload.path;
        var newpath = __dirname + "/wadah/" + files.filetoupload.name;

        // pindahkan file yang telah di-upload
        mv(oldpath, newpath, function (err){
          if(err) { throw err; }
          console.log('file uploaded succesfully');
          return res.end("file upload succesfully");
        });
      });
    }
});

server.listen(8000);

console.log("Server is running on http://localhost:8000");
