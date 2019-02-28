var fs = require('fs');

fs.rename('newname1.txt', 'newname.txt', function (err){
    if(err) throw err;
    console.log('File Renamed !');
});
