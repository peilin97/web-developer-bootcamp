const express = require("express"),
	  app = express(),
	  passport = require("passport"),
	  LocalStrategy = require("passport-local"),
	  flash = require("connect-flash"),
	  methodOverride = require("method-override"),
	  bodyParser = require("body-parser"),
	  mongoose = require("mongoose"),
	  Campground = require("./models/campground"),
	  Comment = require("./models/comment"),
	  User = require("./models/user"),
	  seedDB = require("./seeds"),
	  // require route files
	  commentRoutes = require("./routes/comments"),
	  campgroundRoutes = require("./routes/campgrounds"),
	  indexRoutes = require("./routes/index");

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
seedDB();
app.locals.moment = require("moment");

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "XXXXX",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("The YelpCamp Server has started!");
});