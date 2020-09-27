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

// EDIT ROUTE
router.get("/:comment_id/edit", checkCommentOwnership, function(req, res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if (err) {
			res.redirect("back");
		} else {
			res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
		}
	});
});

// UPDATE ROUTE
// id: campground's id, comment_id: comment's id
router.put("/:comment_id", checkCommentOwnership, function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if (err) {
			res.redirect("back");
		} else {
			res.redirect("/campgrounds/"+req.params.id);
		}
	});
});

// COMMENT DESTROY ROUTE
router.delete("/:comment_id", checkCommentOwnership, function(req, res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if (err) {
			res.redirect("back");
		} else {
			res.redirect("/campgrounds/"+req.params.id);
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

function checkCommentOwnership(req, res, next) {
	if (req.isAuthenticated()) {
		Comment.foundById(req.params.comment_id, function(err, foundComment){
		if (err) {
			res.redirect("back");
		} else {
			if (foundComment.author.id.equals(req.user._id)) {
				next();
			} else {
				res.redirect("back");
			}
		}
	});
	} else {
		// if not, redirect
		res.redirect("back");
	}
}

module.exports = router;