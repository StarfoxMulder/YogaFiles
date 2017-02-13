var item1 = 3.74;
var item2 = 5.82;

function subT (a, b) {
	subtotal = a + b;
	return subtotal;
};

function taxes (a) {
	taxRate = .10;
	taxAmt = a * taxRate;
	total = taxAmt + a;
	return total;
};

subT(item1, item2);
taxes(subtotal);
console.log("Your total is $"+total.toFixed(2));

var total2 = taxes(subT(item1, item2));
console.log("This is the way of doing that with callbacks -- $"+total2.toFixed(2))