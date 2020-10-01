function doSomething() {
  console.log("HELLO WORLD");
}


function square(num) {
  console.log(num * num);
}
square(10);  //prints 100
square(3);   //prints 9
square(4);   //prints 16

function area(length, width) {
  console.log(length * width);
}
area(9,2); //18

function greet(person1, person2, person3){
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione");


//this function capitalizes the first char in a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";              //"paris"
var capital = capitalize(city);  //"Paris"

//we can capture the returned value in a variable


function capitalize(str) {
  if(typeof str === "number") {
    return "that's not a string!"
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";              //"paris"
var capital = capitalize(city);  //"Paris"

var num = 37;           
var capital = capitalize(num);  //"that's not a string!"


//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}































