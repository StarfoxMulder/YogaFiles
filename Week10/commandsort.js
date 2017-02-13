// var numbers = [
// 	5, 10, 22, 17, 36, 2, 222, 97];


// function sortNum (a, b) {
// 	return a - b;
// }

// output = numbers.sort(sortNum);

// console.log(output);

var nodeArg = process.argv;

var numArray = [];

for (var i=2; i<nodeArg.length; i++) {
	numArray.push(parseFloat(nodeArg[i]));
}

console.log(numArray);

console.log(numArray.sort(sortNums));

function sortNums(a, b) {
	return(a-b);
}

