var express = require("express");
var app = express();

app.use(express.static("public"));  // tell express to serve the public directory
app.set("view engine", "ejs");

app.get("/", function(req, res){
	// res.render("home.ejs"); //embeded js
	// res.send("<h1>Welcome to the home page! </h1><h2>blah blah</h2>");
	res.render("home"); // by adding app.set()
});

app.get("/fallinginlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	// res.render("love.ejs", {thingVar: thing});
	res.render("love", {thingVar: thing});
	
})

app.get("/name/:name", function(req, res){
	var name = req.params.name;
	// res.render("name.ejs", {name: name});
	res.render("name", {name: name});
})

// loop
app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Charlie"},
		{title: "Can you believe this pomsky", author: "Colt"}
	];
	
	// res.render("posts.ejs", {posts: posts});
	res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server is listening!");
});