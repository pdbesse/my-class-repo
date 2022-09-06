// Declares student variable using var keyword 
var studentName;

// Uses assignment operator(=) to assign a value
studentName = "Farley";
var studentAge = 5;
console.log(studentName);


// To re-assign a variable, use only the variable's name  
studentName = "Asher";
studentAge = 3;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Asher"
console.log("My name is " + studentName + ". My age is " + studentAge);

console.log("My name is " + studentName + ". My age is " + age);//Uncaught ReferenceError: age is not defined
