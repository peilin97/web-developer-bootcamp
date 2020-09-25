const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/references', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const Post = require("./models/post");
const User = require("./models/user");

// POST - title, content
// const postSchema = new mongoose.Schema({
// 	title: String,
// 	content: String
// });
// const Post = mongoose.model("Post", postSchema);

// USER - email, db_name
// const userSchema = new mongoose.Schema({
// 	email: String,
// 	name: String,
// 	// an array of ids of posts
// 	posts: [{type: mongoose.Schema.Types.ObjectId,
// 			ref: "Post"}]
// });
// const User = mongoose.model("User", userSchema);

// User.create({
// 	email:"bob@gmail.com",
// 	name:"Bob Belcher"
// });

// Post.create({
// 	title: "How to cook the best burger",
// 	content: "blah blah",
// 	posts: []
// }, function(err, post){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// })

// Post.create({
// 	title: "How to cook the best burger2",
// 	content: "blah blah"
// }, function(err, post){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 		User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				foundUser.posts.push(post);
// 				foundUser.save(function(err, data) {
// 					if (err) {
// 						console.log(err);
// 					} else {
// 						console.log(data);
// 					}
// 				})
// 			}
// 		})
// 	}
// });

// Post.create({
// 	title: "How to cook the best burger3",
// 	content: "blah blah"
// }, function(err, post){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 		User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				foundUser.posts.push(post);
// 				foundUser.save(function(err, data) {
// 					if (err) {
// 						console.log(err);
// 					} else {
// 						console.log(data);
// 					}
// 				})
// 			}
// 		})
// 	}
// });

// find user
// find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

