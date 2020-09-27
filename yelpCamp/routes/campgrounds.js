const express = require("express"),
	  router = express.Router(),
	  Campground = require("../models/campground");

// add all routes to router
// INDEX route - shows all campgrounds
router.get("/", function(req, res) {
	
	// Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if (err) {
			console.log(err);
		} else {
			res.render("campgrounds/index", {
				campgrounds: allCampgrounds});
		}
	});
});

// CREATE route - add new campground to DB
router.post("/", isLoggedIn, function(req, res) {
	// get data from form and add to campgrounds array
	const name = req.body.name,
		  image = req.body.image,
		  desc = req.body.description,
		  author = {
			id: req.user._id,
			username: req.user.username
		  },
		  newCampground = {name: name,
						   image: image,
						   description: desc,
						   author: author};
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err) {
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// NEW route - shows the form that create a new campground
router.get("/new", isLoggedIn, function(req, res) {
	res.render("campgrounds/new");
});

// SHOW route - shows the info about one campground
// SHOW must be placed after NEW
router.get("/:id", function(req, res) {
	// find the campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if (err) {
			console.log(err);
		} else {
			console.log(foundCampground);
			// render show template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

// MIDDLEWARE
function isLoggedIn(req, res, next){
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;