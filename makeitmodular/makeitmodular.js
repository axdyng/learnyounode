var filter = require('./filter.js');

function cb(err, data) {
	if(err) return err;

	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
}

filter(process.argv[2], process.argv[3], cb);
