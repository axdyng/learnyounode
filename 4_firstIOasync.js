/* ~---- FIRST I/O ASYNC ----~ */
var fs = require('fs');

function file(error, data) {
  if(error) {
    return error;
  }
  lines = data.toString().split('\n').length - 1;
  console.log(lines);
}
fs.readFile(process.argv[2], file);
