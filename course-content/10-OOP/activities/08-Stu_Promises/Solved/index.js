// Prompt the user to enter what they are currently doing
// We capture the user's input by setting it to a variable at the top of the application,
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  //If the user doesn't enter anything, we return an error message and include instruction on how to use the application. process.exit() will end execution of the program when called
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
//The application relies on checking whether the student is coding. We check whether the current student action is anything other than coding and store the Boolean result in a variable called studentDistracted
const studentDistracted = userInput !== 'coding';

// Refactored 'practiceCoding()' to use promises
//We refactor the practiceCoding() function from using callbacks to using Promises,
const practiceCoding = (studentDistracted) => {
  return new Promise((resolve, reject) => {
    //By the same logic as the original practiceCoding() function, the Promise calls the reject() method if studentDistracted is set to true,
    if (studentDistracted) {
      console.log("AHHHHHH new Error!")
      reject(new Error('Coding stopped - Student is distracted'));
    }
    //Otherwise, we resolve the Promise—as shown in the following example—because the student is coding, which is the desired outcome:
    resolve('We are coding!');
  })};

// Refactor to call 'practiceCoding()' and chain a 'then()' and 'catch()'
//We call the practiceCoding() function and chain a then() to define the code that ought to run after the Promise has been resolved. Lastly, we chain a catch() to log any errors in the console
practiceCoding(studentDistracted)
  .then(() => console.log('We are coding in promises!'))
  .catch((err) => console.error('Promise rejected:', err));


//=====CB Version

// const practiceCodingCB = (cb, errCb) => {
//   if (studentDistracted) {
//     errCb({
//       issue: 'Distracted',
//       message: 'Coding stopped',
//     });
//   } else {
//     cb('We are coding (practiceCodingCB)!');
//   }
// };


// const callback = (message) => console.log(message);
// const errorCallback = (message) => console.log(message);

// // // TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// // // TODO: Chain a 'catch()' to log "Promise rejected: " and the error
// practiceCodingCB(callback, errorCallback);
