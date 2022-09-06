const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(patron => patron.age > 17);

console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over
  // Spread Operator (what is this?)
  // const pObj = { ...patron };
  const pObj = { name: patron.name, age: patron.age };

  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

const cardedMoviePatronsModified = moviePatrons.map(patron => {
  // Copy the object being iterated over
  // Spread Operator (what is this?)
  
  // Do everything else the same
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return patron;
});


console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);
// [
//   { name: 'Tom', age: 16, canWatchRatedR: false },
//   { name: 'Ashley', age: 31, canWatchRatedR: true },
//   { name: 'Sarah', age: 18, canWatchRatedR: true },
//   { name: 'Alvin', age: 22, canWatchRatedR: true },
//   { name: 'Cherie', age: 14, canWatchRatedR: false },
//   { name: 'Malcolm', age: 15, canWatchRatedR: false }
// ]
console.log("*************");
console.log(moviePatrons);// ooops modified the original array
// [
//   { name: 'Tom', age: 16, canWatchRatedR: false },
//   { name: 'Ashley', age: 31, canWatchRatedR: true },
//   { name: 'Sarah', age: 18, canWatchRatedR: true },
//   { name: 'Alvin', age: 22, canWatchRatedR: true },
//   { name: 'Cherie', age: 14, canWatchRatedR: false },
//   { name: 'Malcolm', age: 15, canWatchRatedR: false }
// ]
console.log("*************");

// console.log("\nCarded Movie Patrons Modified ");
// console.log(cardedMoviePatronsModified);

console.log("Movie Patrons: OOPS ")
console.log(moviePatrons);

// Movie Patrons: OOPS 
// [
//   { name: 'Tom', age: 16, canWatchRatedR: false },
//   { name: 'Ashley', age: 31, canWatchRatedR: true },
//   { name: 'Sarah', age: 18, canWatchRatedR: true },
//   { name: 'Alvin', age: 22, canWatchRatedR: true },
//   { name: 'Cherie', age: 14, canWatchRatedR: false },
//   { name: 'Malcolm', age: 15, canWatchRatedR: false }
// ]
