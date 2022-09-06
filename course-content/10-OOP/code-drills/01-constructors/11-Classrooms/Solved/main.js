// requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Jerome", 506);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Mahisha", "Coding", 3.91);
firstClass.addStudent("Alexi", "Coding", 3.87);
firstClass.addStudent("Lex", "Coding", 3.83);
firstClass.addStudent("Jordan", "Coding", 3.75);



console.log(firstClass);
