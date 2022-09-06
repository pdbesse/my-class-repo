function counter() {
  // Create a 'count' variable inside of the outer function.
  let count = 0;

  // Return an inner function creating a closure.
  return {
    increment: function () {
      // Increment the outer function's 'count' variable by one.
      // count++;//increment and then return - returns 1
      // or return ++count
      // return count;
      //-----
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
      //If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
      //If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
      return count++ // - returns 0
    },
     
  };
}


// let myCounter = counter();
// myCounter.increment(); // 0
// myCounter.increment(); // 1
// console.log(myCounter.increment()); // 2


module.exports = counter;
