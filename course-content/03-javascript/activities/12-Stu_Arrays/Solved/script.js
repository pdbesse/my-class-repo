// Creates an array containing names of five students in the class
var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

// Logs length of the students array
console.log(students.length);//5 

// Now, write a console log introducing each student

console.log("Welcome to the class Sarah");
console.log("Welcome to the class Orlando");
console.log("Welcome to the class Heather");
console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);
console.log("Welcome to the class " + students[4]);
   
// Replace the first student in the array with a new student Bob.
students[0] = "Bob";

// Use your Javascript to check if "Bob" is the first elemnt in the array 
if (students[0] === "Bob") {
    console.log(students[0] + " is in class!");
} 

students[5] = "Asher";
// students.push("Asher");
console.log("Welcome to the class " + students[5]);

students[6] = "Sage";
console.log("Welcome to the class " + students[6]);

console.log("********");

console.log(students); // ['Bob', 'Orlando', 'Heather', 'Ismael', 'Hung', 'Asher', 'Sage']
console.log(students[7]);//undefined
console.log(students[students.length]);//undefined
console.log(students[6]);//Sage
console.log(students[students.length -1]);//Sage


console.log("********");

//sidenote
console.log(thing);//undefined
var thing = 'Vroom';
console.log(thing);//Vroom



console.log(notCreate)//Uncaught ReferenceError: notCreate is not defined
// var notCreate;
