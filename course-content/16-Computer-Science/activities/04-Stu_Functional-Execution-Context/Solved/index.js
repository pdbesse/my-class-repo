// Find average value of an array of numbers
// 3. Calling sum() in the outer function executes the inner function, which returns the sum of the numbers in the array.
function avg(array) {
  // 1. The variables total and i are declared in the inner function sum(). Therefore neither 
  //    variable can be accessed in the scope of the outer function arg() and can be considered 
  //    private variables.
  //    This was the cause of the error which failed the tests.
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    // total is accessible in the sum's execution context
    // 2. By adding the statement return total to the inner function sum(), we explicitly end the function's execution, remove the function execution context, pop sum() off the call stack, and assign the value of total to where sum() was called.
    return total;
    //return total/array.length;//why is this an issue
  }
  // return sum();
  // value of total is returned to where sum() is invoked
  return sum()/array.length;
}

module.exports = avg;


// The basic parts of a sentence are the subject and the verb. 
// The subject is usually a noun—a word (or phrase) that names a person, place, or thing. The verb (or predicate) usually follows the subject and identifies an action or a state of being. See if you can identify the subject and the verb in each of the following short sentences:

// The hawk soars.
// The boys laugh.
// My daughter is a wrestler.
// The children are tired.
