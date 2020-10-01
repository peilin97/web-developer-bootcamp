// identifiers
/*
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
*/

// One Statement, Many Variables
// Start the statement with var and separate the variables by comma
var person = "John Doe", carName = "Volvo", price = 200;

// A declaration can span multiple lines
var person = "John Doe",
carName = "Volvo",
price = 200;

// Value = undefined
// A variable declared without a value will have the value undefined

// Re-Declaring JavaScript Variables
// The variable carName will still have the value "Volvo" after the execution of these statements
var carName = "Volvo";
var carName;

// JS Arithmetic
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var x = "5" + 2 + 3; // x = "523"
var x = 2 + 3 + "5"; // x = "55"


// let
/*
The let statement declares a block-scoped local variable
optionally initializing it to a value.
*/
{
  let x = 2;
}
// x can NOT be used here

var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

/*
Redeclaring a variable inside a block will not 
redeclare the variable outside the block
*/
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


// const
// Variables defined with const behave like let variables, except they cannot be reassigned
// Constant primitive values cannot change
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// JavaScript const variables must be assigned a value when they are declared
// Incorrect: 
// const PI;
// PI = 3.14159265359;

// Correct:
const PI = 3.14159265359;

/*
It does NOT define a constant value. It defines a constant reference to a value.
Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
If we assign a primitive value to a constant, we cannot change the primitive value
You can change the properties of a constant object
But you can NOT reassign a constant object
*/
// Constant objects can change
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

cars = ["Toyota", "Volvo", "Audi"];    // ERROR










