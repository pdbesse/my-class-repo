// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
// Initialization


}

// creates the printInfo method and applies it to all programmer objects using prototypes


// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  // Using inquirer ask name, current position, age, favorite programming language from user



  
]).then(function(answers) {
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
  // printInfo method is run to show that the newProgrammer object was successfully created and filled
  newProgrammer.printInfo();
});
