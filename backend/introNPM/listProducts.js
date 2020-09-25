var faker = require("faker");

for (var i = 1; i <= 10; i++) {
	var commerce = faker.commerce;
	console.log(i + ". " + commerce.productName() + ": " + commerce.price());
}