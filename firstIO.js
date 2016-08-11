/* ~---- FIRST I/O ----~ */
var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    getStr = file.toString().split('\n');
    newLine = getStr.length - 1;

console.log(newLine);
