// In mathematics and computer science, a higher-order function is a function that does at least one of the following:

// * takes one or more functions as arguments (i.e. procedural parameters),
// * returns a function as its result.

//All other functions are first-order functions. 


const arrayIndex = [1, 52, 35, 6, 72, 7, 3, 19, 32, 54, 78, 95, 97];

// Create a function which accepts two arguments, number and index.
// The index of the array is provided to us because we will pass this function through .map array method.
function evenIndexMultiplier(number, index) {
  // Checking to see if we are on an even index inside of the array we are mapping through.
  if (index % 2 === 0) {
    // Multiply the number on the even index by 10.
    return number * 10;
  }

  // Return the number if it is on an odd index.
  return number;
}

// Create a new variable to store our newly mapped array with our `evenIndexMultiplier` function passed through it.
const evenIndexes = arrayIndex.map(evenIndexMultiplier);

console.log(evenIndexes);


// * returns a function as its result.
//* A function that accepts a function(F) and a value (V), and returns a function that returns the result of running F on V. 

function wrap(func, value) {
  return function() {
    return func(value);
  };
}

const myFun = wrap(function(arg){
  return arg + 10;
}, 3)

console.log(myFun());//13

// * returns a function as its result.
//* Returns function taht returns a str value when executed


function higherFun(strVal){
  return function() {
    return `This is the value: ${strVal} `;
  };
}

const returnFun = higherFun("Farley");

console.log(returnFun());//This is the value: Farley 

