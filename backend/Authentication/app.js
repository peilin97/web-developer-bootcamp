const express = require("express"),
	  app = express(),
	  mongoose = require("mongoose"),
	  passport = require("passport"),
	  bodyParser = require("body-parser"),
	  LocalStrategy = require("passport-local"),
	  passportLocalMongoose = require("passport-local-mongoose"),
	  User = require("./models/user");
	
mongoose.connect('mongodb://localhost:27017/auth_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
app.set("view engine", "ejs");
app.use(require("express-session")({
	secret: "XXXXXXXXXXXXXXXX",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
});

// Auth Routes
// show sign in form
app.get("/register", function(req, res){
	res.render("register");
});

// handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");
        });
    });
});

// LOGIN ROUTES
// render login form
app.get("/login", function(req, res){
	res.render("login");
});
// login logic
// midddleware
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res){
	
});

app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()){
		return next();  // refer to the callback function(req, res) ...
	}
	res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.......");
});