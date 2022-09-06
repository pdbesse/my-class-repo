//Primitive data types include undefined, string, number and boolean
//Undefined variables haven't been assigned values yet.
//In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. 
//There are 7 primitive data types: 
//string, number, bigint(number), boolean, undefined, symbol, and null.

var myUndefined;

// A string is a series of characters and is surrounded by quotes 
var myStringWelcome = "Hello World's"; 
myStringWelcome = 'Hello World\'s'; 
var myStringPassword = "865Password!2020";

// A number can be either an integer or a decimal  
var myNumberInt = 100;
var myNumberDecimal = 100.100;

// Booleans have two values: true or false
var isMyBooleanTrue = true;
var isMyBooleanFalse = false;

 // isMyBooleanFalse = "yep";

// To check the type of data, use typeof followed by the name of the variable
// Logs undefined
console.log(typeof myUndefined);

// Logs number
console.log(typeof myNumberInt); //number
console.log(typeof myNumberDecimal); //number

// Logs boolean
console.log(typeof isMyBooleanTrue);

// Logs string
console.log(typeof myStringWelcome);


//logs Object!?! 
var nothing = null;
console.log(typeof null);
//Null. In JavaScript null is "nothing". ... Unfortunately, in JavaScript, the data type of null is an object. 
//You can consider it a bug in JavaScript that typeof null is an object.


// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!
//In programming we call a language loosely typed when you don't have to explicitly specify types of variables 
//JavaScript, Python and Ruby are loosely typed

// Logs number
var myVariable = 33;
console.log(typeof myVariable);

// myVariable is reassigned; Logs boolean
myVariable = false;
console.log(typeof myVariable);
