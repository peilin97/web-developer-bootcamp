const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	// an array of ids of posts
	posts: [{type: mongoose.Schema.Types.ObjectId,
			ref: "Post"}]
});

module.exports = mongoose.model("User", userSchema);