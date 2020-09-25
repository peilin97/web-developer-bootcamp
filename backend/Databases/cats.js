const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

// compile catSchema into a model, which has a bunch of methods
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var george = new Cat({name:"George",
// 		age: 11,
// 		temperament:"Grouchy"});

// george.save(function(err, cat){
// 	if (err) {
// 		console.log("SOMETHING WENT WRONG!");
// 	} else {
// 		console.log("WE JUST SAVED A CAT TO THE DB!:");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, cat){
	if (err) {
		console.log(err);
	} else {
		console.log(cat);
	}
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
	if (err) {
		console.log("ERROR!");
		console.log(err);
	} else {
		console.log("ALL THE CATS ......");
		console.log(cats);
	}
});