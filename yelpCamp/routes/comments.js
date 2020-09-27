const express = require("express"),
	  router = express.Router({mergeParams: true}),
	  Campground = require("../models/campground"),
	  Comment = require("../models/comment");

// COMMENTS ROUTES
// new comment only if the user is logged in
// isLoggedIn will be run first, if it is loggedin, run callback function
router.get("/new", isLoggedIn, function(req, res){
	// find campground by id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	});
});

// COMMENTS CREATE
router.post("/", isLoggedIn, function(req, res){
	// lookup campground using id
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			console.log(err);
			res.redirect("/campgrounds");
		} else {
			// create new comment
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					// add username and id to comment
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					// save comment
					comment.save();
					campground.comments.push(comment);
					campground.save();
					// redirect campground show page
					res.redirect('/campgrounds/'+campground._id);
				}
			});
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