function Student(name, gradeYear) {
  // Store the function's argruments as an object named `student`.
  let student = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    // Return an inner function which has access to the outer function's scope.
    greet: function () {
      console.log(
        // Access the students name and grade year using dot notation.
        `My name is ${student.name} and I am in ${student.gradeYear} grade`
      );
    },
  };
}

// Create a new student passing a name and grade year as arguments.
const newStudent = Student('Dominique', '11th');

// Call the `greet` function on the newly created student.
newStudent.greet();

module.exports = Student;
