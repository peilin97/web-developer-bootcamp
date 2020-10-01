
// objects: store data in key-value pairs
var person = { name: "Travis",
age: 21,
city: "LA"
};

// two ways to retrieve data
// 1. bracket notation
person["name"];
// 2. dot notation
person.name;

//you cannot use dot notation if the property starts with a number
// someObject.1blah //INVALID
person["1blah"] //VALID!

//you can lookup using a variable with bracket notation 
var str = "name";
person.str //doesn't look for "name" 
person[str] //does evaluate str and looks for "name", return "Travis"

//you cannot use dot notation for property names with spaces
// someObject.fav color //INVALID
person["fav color"]; //VALID

// update data
person["age"]+=1;
person.city = "London";

// create object
//make an empty object and then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once
var person = {
name: "Travis", age: 21,
city: "LA"
};

//another way of initializing an Object 
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

var junkObject = {
	age: 57,
	color: "purple",
	isHungry: true,
	friends: ["Horatio", "Hamlet"],
	pet: {
		name: "Rusty",
		species: "Dog",
		age: 2} 
};

// methods: storing functions in objects
// Methods are stored in properties as function definitions.
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// objectName.methodName() # access object methods
/*
Avoid String, Number, and Boolean objects.
They complicate your code and slow down execution speed.
*/






























































