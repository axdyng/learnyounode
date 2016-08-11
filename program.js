
/* ~---- FIRST I/O ASYNC ----~ */
// var fs = require('fs');
//
// function file(error, data) {
//   if(error) {
//     return error;
//   }
//   lines = data.toString().split('\n').length - 1;
//   console.log(lines);
// }
// fs.readFile(process.argv[2], file);

/* ~---- FILTERED LS ----~ */
var fs    = require('fs'),
    path  = require('path');

function callback(err, list) {
  if ( err ) {
    return err;
  }
  var fileExt = '.' + process.argv[3];

  for (var i = 0; i < list.length; i++) {
    //console.log(path.extname(list[i]));
    if(path.extname(list[i]) === fileExt) {
        console.log(list[i]);
    }
  }
}

fs.readdir(process.argv[2], callback);
