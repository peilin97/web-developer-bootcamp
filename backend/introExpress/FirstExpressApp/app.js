var express = require("express");
var app = express();

// three different routes
// "/" => "Hi there!"
app.get("/", function(req, res) {  // request, response
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {  // request, response
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {  // request, response
	res.send("MEOW!");
});

// colon (:) makes the adjacent string a variable
// pattern /r/anything without another slash
app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() +" SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
	
	res.send("WELCOME TO A THE COMMENT PAGE!");
});

// any other routes, order matters
app.get("*", function(req, res) {
	res.send("YOU ARE A STAR!!!");
});

// tell Express to listen for requests (start, server)
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started!");
});