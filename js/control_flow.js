// boolean logic

// equality operators: == vs. ===
/*
 == will perform a type conversion when comparing two things

 === will do the same comparison as double equals but without type conversion;
 if the types differ, false is returned.

 == equal to
 != not equal to
 === equal value and type
 !== not equal value or equal type 
 */
var x = 99;
x == "99"  //true
x === "99" //false

var y = null;
y == undefined //true
y === undefined //false

// a few interesting cases
true == "1"          //true
0 == false           //true
null == undefined    //true
NaN == NaN           //false

// logical operators
// AND: &&, OR: ||, NOT: !

// truthy and falsy values
// falsy values:
false
0
""
null
undefined
NaN
// everything else is truthy
!"Hello world" // return false


/* conditionals
if (condition1) {
	statement1
} else if (condition2) {
	statement2
} else {
	statement3
}
*/

/* while loops
while (condition) {
	// statement
}
*/

/* for loops
for(init; condition; step) {
  //run some code
}
*/
























