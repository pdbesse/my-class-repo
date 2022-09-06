// Declare variables using var
//note: https://developer.mozilla.org/en-US/docs/Web/API/Window/name
//There is a reserved browser variable 'name'
//you should attempt to avoid using reserved JS names when possible: https://www.w3schools.com/js/js_reserved.asp
var myName = "Sage";
var numPetsInHouse = 3;
var funFact = "I like pineapple on my pizza.";

// Use + to combine data and variable names in a single console log
console.log("My name is " + myName + ".");
console.log("I have " + numPetsInHouse + " pet(s).");
console.log("Fun fact: " + funFact);

// When re-assigning variables, use variable name
myName = "Mateo";
numPetsInHouse = 5;
funFact = "I was a yo-yo champ in third grade."

// Logs message with re-assigned values
console.log("My name is " + myName + ".");
console.log("I have " + numPetsInHouse + " pet(s).");
console.log("Fun fact: " + funFact);


console.log(myName + "has " + numPetsInHouse + " Pets");

var num1 = 10;
var num2 = "10";

console.log(num1 + num2);
