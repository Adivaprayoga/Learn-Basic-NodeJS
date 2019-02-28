var fs = require('fs');
var rl = require('readline-sync');

var name = rl.question("Select your file name : ");

// create a file named mynewfile1.txt
fs.appendFile(name, 'Hello Adiva !', function (err){
  if(err) throw err;
  console.log('Saved !');
});
