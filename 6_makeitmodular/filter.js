/* ~---- MAKE IT MODULAR ----~ */
// FILTER

module.exports = function(dir, fileExt, cb) {
  var fs    = require('fs'),
      path  = require('path');

  fs.readdir(dir, readFile);

  //second cb
  function readFile(err, data) {
    if( err ) {
      return err;
    }
    var filteredList = [],
        extension = '.' + fileExt;

    for (var i = 0; i < data.length; i++) {
      if(path.extname(data[i]) === extension) {
        filteredList.push(data[i]);
      }
    }
    return (null, filtered);
  }

};

//console.log(process.argv);
