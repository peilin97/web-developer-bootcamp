// Arrays
// index starts at 0
var friends = ["Charlie", "Liz", "David", "Mattias"];
console.log(friends[0]) //"Charlie"
friends[1] + " <3 " + friends[2]  //"Liz <3 David"
// update arrays
friends[0] = "Chuck";
friends[1] = "Lizzie";
// add new data
friends[4] = "Amelie";

//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45,37,89,24];
nums.length   //4

// arrays' built-in methods
// push/pop, shift/unshift, indexOf, slice

// push(var): add the element to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green"); //["red", "orange", "yellow", "green"]

// pop(): remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop(); //["red", "orange"]
//pop() returns the removed element
var col = colors.pop();  //orange

// unshift(var): add the element to the front of an array
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared") //["infrared", "red", "orange", "yellow"]

// shift(): remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow"]

//shift() also returns the removed element
var col = colors.shift();  //orange

// indexOf(var): find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

//returns -1 if the element is not present.
friends.indexOf("Hagrid"); //-1


// slice(startIdx, endIdx): copy parts of an array, startIdx inclusive, endIdx exclusive
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]


// splice(start, deleteCount_optional, item1, item2,..._optional)
// return an array containing the deleted elements.
// If no elements are removed, an empty array is returned.
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use splice to remove 'Orange' from the array
//specify index of the element to be removed and 
//how many elements should be removed from that index
fruits.splice(1, 1);
// returns: ["Orange"]
console.log(fruits);
// prints: ["Banana", "Lemon", "Apple", "Mango"]


// array iteration
var colors = ["red", "orange", "yellow", "green"];
for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


/*
array.forEach(function(currentValue, index, arr), thisValue)
currentValue: Required. The value of the current element
index: Optional. The array index of the current element
arr: Optional. The array object the current element belongs to
thisValue: Optional. A value to be passed to the function to be used as its "this" value.
If this parameter is empty, the value "undefined" will be passed as its "this" value

*/
var colors = ["red", "orange","yellow", "green"];
colors.forEach(function(color){
//color is a placeholder, call it whatever you want
  console.log(color);
});







