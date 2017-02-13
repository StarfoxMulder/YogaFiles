var bandsMusic = require("./bands.js");
var type = process.argv[2];

if (type == "punk") {
	console.log("A "+type+" band is "+bandsMusic.bands.punk+".");
} else if (type == "rap") {
	console.log("A "+type+" band is "+bandsMusic.bands.rap+".");
} else if (type == "timeTravel") {
	console.log("A "+type+" band is "+bandsMusic.bands.timeTravel+".");
} else {
//	console.log("A "+bandsMusic.bands+" band is "+bandsMusic.bands.punk+".");
//	console.log("A "+bandsMusic.bands+" band is "+bandsMusic.bands.rap+".");
//	console.log("A "+bandsMusic.bands+" band is "+bandsMusic.bands.timeTravel+".");

	for (var key in bandsMusic.bands) {
		console.log("A "+key+" band is "+bandsMusic.bands[key]+".");
	}
}