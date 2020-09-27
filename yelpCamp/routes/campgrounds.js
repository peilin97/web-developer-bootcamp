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

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
	Campground.foundById(req.params.id, function(err, foundCampground){
		res.render("/campgrounds/edit", {campground: foundCampground});
	});
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", checkCampgroundOwnership, function(req, res){
	// find and update the correct campground
	Campground.findById(req.params.id, req.body.campground, function(err, updatedCampground){
		if (err) {
			res.redirect("/campgrounds");
		} else {
			// redirect show page
			res.redirect("/campgrounds/"+req.params.id);
		}
	});
	
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", checkCampgroundOwnership, function(req, res){
	Campground.foundByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");
		}
	})
});

// MIDDLEWARE
function isLoggedIn(req, res, next){
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

// AUTHORIZATION
function checkCampgroundOwnership(req, res, next){
	// is user logged in
	if (req.isAuthenticated()) {
		Campground.foundById(req.params.id, function(err, foundCampground){
		if (err) {
			res.redirect("back");
		} else {
			// does user own the campground?
			// foundCampground.author.id is an object
			// req.user._id is a string
			// they cannot be compared by === or ==
			if (foundCampground.author.id.equals(req.user._id)) {
				next();
				// res.render("/campgrounds/edit", {campground: foundCampground});
			} else {
				res.redirect("back");
				// res.send("YOU DO NOT HAVE PERMISSION TO EDIT THIS CAMPGROUND!");
			}
		}
	});
	} else {
		// if not, redirect
		res.redirect("back");
	}
}

module.exports = router;