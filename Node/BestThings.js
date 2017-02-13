var fs = require('fs');

fs.readFile("BestThingsEver.txt", "utf8", (error, data)=> {
	console.log(data);
	var bestThingsArray = data.split(', ');
	console.log(bestThingsArray);
});