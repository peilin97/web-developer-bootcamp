const express = require("express");
const app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!"
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says '" + sound + "'");
	// if (animal === "pig") {
	// 	res.send("The pig says 'Oink");
	// } else if (animal === "cow") {
	// 	res.send("The cow says 'Moo'");
	// } else if (animal === "dog") {
	// 	res.send("The dog says ")
	// }
});

app.get("/repeat/:str/:times", function(req, res) {
	var str = req.params.str;
	var times = Number(req.params.times);
	var result = "";
	for (var i = 0; i < times; i++) {
		result += str;
		if (i < times-1) {
			result += " ";
		}
	}
	res.send(result);
});

app.get('*', function(req, res) {
	res.send("Sorry, page not found...");
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started!");
});