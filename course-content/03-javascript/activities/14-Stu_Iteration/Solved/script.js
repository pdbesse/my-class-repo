  // Creates an array containing names of five student in the class
  var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

  // Logs length of the array
  console.log(students.length);

  // For loop starts at 0, runs while i is less than length of student array
  // Increments by 1
  for(var i = 0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }

console.log("==========");

  for(var i = students.length; i >= 0; i--) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }


console.log("==========");


// While Loop: Loops can execute a block of code as long as a specified condition is true.
  var i = 0;
  while (i < students.length) {
  console.log("Good to see you, " + students[i] + "!");
  i++;
}

console.log("==========");

// The do...while statement creates a loop that executes a specified statement 
// until the test condition evaluates to false. 
// The condition is evaluated after executing the statement, 
// resulting in the specified statement executing at least once.
var i = 0;
do {
  i = i + 1;
  console.log("Good to see you, " + students[i] + "!");
} while (i < students.length);


console.log("==========");

var foundStuent = false;
var i = 0;
while(!foundStuent && i < students.length ){
  if(students[i] === "Heather"){
    foundStuent = true;
    console.log("Found " + students[i])
  }
  if(i >= students.length -1 && !foundStuent){
    console.log("student Not Found");
    
  }else if (!foundStuent){
    console.log("Current Student: " + students[i])
    i++;
  }
  
}
