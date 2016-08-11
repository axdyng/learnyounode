/* ~---- BABY STEPS ----~ */
//console.log(process.argv);
var sum = 0,
    argv = process.argv;

for (var i = 2; i < argv.length; i++) {
  sum += Number(argv[i]);
}
console.log(sum);
