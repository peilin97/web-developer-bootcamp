const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/embed', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// POST - title, content
const postSchema = new mongoose.Schema({
	title: String,
	content: String
});
const Post = mongoose.model("Post", postSchema);

// USER - email, db_name
// because we need to embed posts in user, postSchema need to be created before userSchema
const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email:"hermione@hogwarts.edu",
// 	name:"Hermione Granger"
// });

// newUser.posts.push({
// 	title:"exam test",
// 	content:"got a full mark"
// });

// newUser.save(function(err, user){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "Theey are delicious"
// });
// newPost.save(function(err, post){
// 	if (err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		// console.log(user);
		user.posts.push({
			title:"3 things i really hate",
			content:"voldemort, voldemort, voldemort"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		})
	}
});