var a = "50";
var b = 50;
var c = 100;
var d = c % b;//100 % 50 => 0 - no remainder
var e = c / 2;//100 / 2 => 50 

// Evaluates to true
var expression1 = (b === e);//50 vs. 50

// Evaluates to false
var expression2 = (e < d);//50 < 0

// Use comparison operators so all expressions below log to the console as true
// Strict equality (===) returns false; Equality returns true (==)
console.log(a == b);

// b and e both hold number 50 and are strictly equal
console.log(b === e);

// c is greater than b returns true 
console.log(c > b);//100 > 50

// d is less than 1 returns true
console.log(d < 1);//0 < 1
console.log(d >= 0);
console.log(d >= 0);

// Use logical operators so all expressions below log to the console as true
// Use || to return true
console.log(expression1 || expression2);

//false - both need to be truthy in order for this to be evaluated as true
console.log(expression1 && expression2); //is 50 === 50 AND 50 < 0 => false

//Use ! and && to return true
console.log(expression1 && !expression2);


// Remove (!) from expression1 so one is true 
console.log( expression1 || expression2);


var weather = "Sunny"; 

if(weather === "Sunny"){
	console.log("I will go for a run");
}else {
	console.log("I will make tea");
}

if(weather !=="Sunny"){
	
	console.log("I will make tea");
}else {
	console.log("I will go for a run");
}

var likeOutdoors = true;

if(likeOutdoors){
	
	console.log("I will go for hike");
}else {
	console.log("I will play Games Inside");
}

if(!likeOutdoors){
	console.log("I will play Games Inside");
	
}else {
	console.log("I will go for hike");
}

// Truthy vs. Falsy
//https://developer.mozilla.org/en-US/docs/Glossary/Truthy

//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
//All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n(bigInt), "", null, undefined, and NaN).

//Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("true")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):
// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN) //The NaN property is a value representing Not-A-Number. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
// if ("")

