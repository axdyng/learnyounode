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
