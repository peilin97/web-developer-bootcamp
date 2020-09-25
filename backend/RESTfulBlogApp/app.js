var express = require("express"),
	methodOverride = require("method-override"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	expressSanitizer = require("express-sanitizer"),
	app = express();

// APP CONFIG
mongoose.connect('mongodb://localhost:27017/wish_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// MONGOOSE/MODEL CONFIG
var wishSchema = new mongoose.Schema({
	title: String,
	image: String,
	link: String,
	created: {type: Date, default: Date.now}
});
var Wish = mongoose.model("Wish", wishSchema);



Wish.create({title:"instant pot", image:"https://images-na.ssl-images-amazon.com/images/I/71Vyt-4fD8L._AC_SL1500_.jpg", link:"https://www.amazon.com/dp/B06Y1YD5W7/ref=cm_sw_em_r_mt_dp_37AAFbPBCF93G"}, function(err, wish){
	if (err) {
		console.log(err);
	} else {
		console.log(wish);
	}
});

// RESTFUL ROUTES
app.get("/", function(req, res) {
	res.redirect("/wishes");
});

// INDEX ROUTE
app.get("/wishes", function(req, res){
	Blog.find({}, function(err, blogs){
		if (err){
			console.log("ERROR!");
		} else {
			res.render("index", {wishes: wishes});
		}
	});
});

// NEW ROUTE
app.get("/wishes/new", function(req, res){
	res.render("new");
});

// CREATE ROUTE
app.post("/wishes", function(req, res){
	// req.body.wish.link = req.sanitize(req.body.wish.link);
	// create blog
	Wish.create(req.body.wish, function(err, newWish){
		if (err) {
			console.log(err);
		} else {
			res.redirect("/wishes");
		}
	})
});

// SHOW ROUTE
app.get("/wishes/:id", function(req, res){
	Wish.findById(req.params.id, function(err, foundWish){
		if (err) {
			// console.log("Could not show the blog");
			console.log(err);
		} else {
			console.log(foundWish);
			res.render("show", {wish: foundWish});
			
		}
	});
});

// EDIT ROUTE
app.get("/wishes/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog});
		}
	});
});

// UPDATE ROUTE
app.put("/wishes/:id", function(req, res){
	// req.body.blog.body = req.sanitize(req.body.blog.body);
		Wish.findByIdAndUpdate(req.params.id, req.body.wish, function(err, updateWish){
		if (err) {
			res.redirect("/wishes");
		} else {
			res.redirect("/wishes" + req.params.id);
		}
	});
});
	
// DELETE ROUTE
app.delete("/wishes/:id", function(req, res){
	// destroy blog
	Wish.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.redirect("/wishes");
		} else {
			res.redirect("/wishes");
		}
	});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
})
