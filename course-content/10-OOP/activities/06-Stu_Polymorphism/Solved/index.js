// Helper function to evaluate if a number is within a given range
//The inRange() helper function and a constructor called Student()
// x = 95, min = 90, max = 100
//(95 - 90) * (95 - 100) = (5 * -5) => -25
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

//The Student() constructor called displayGrade(). We have been tasked with building out this method by checking the data type for the value of grade.
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    //We check that there is no input for grade, and if so, we immediately throw an error
  
    //Then we declare the variable response to be used in the conditional statements
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    //We respond differently depending on whether or not input is a string or a number. So first we will check whether input is a number. If it is, then we will use a series of if statements and the helper function inRange() to set the response variable to the letter grade and return it.
    if (typeof input === 'number') {
      if (inRange(input, 90, 100)) {
        response = 'A';
      }
      if (inRange(input, 80, 89)) {
        response = 'B';
      }
      if (inRange(input, 70, 79)) {
        response = 'C';
      }
      if (inRange(input, 60, 69)) {
        response = 'D';
      }
      if (input < 60) {
        response = 'F';
      }

      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    // If input is a string, we set up a switch statement to handle different cases of letter grades, set the response variable to the range of grades, and return it
    if (typeof input === 'string') {
      switch (input) {
        case 'A':
          response = '90 - 100';
          break;
        case 'B':
          response = '80 - 89';
          break;
        case 'C':
          response = '70 - 79';
          break;
        case 'D':
          response = '60 - 69';
          break;
        case 'F':
          response = '0 - 59';
          break;
        default:
          response = '0';
          break;
      }
      return response;
    }
  };
}
// We create an instance of the Student and test the displayGrade() method by passing it a grade of first 95 and then 'B'
const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
