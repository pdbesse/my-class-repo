// 1. Using arrays
const arrSongs = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (const value of arrSongs) {
  console.log(value);
}
// Bad Guy
// Old Town Road
// 7 Rings


// 2. Using map
const songs = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);
console.log("----------");
console.log(songs);
console.log("----------");

//A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects 
for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);

}
// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2
console.log("********[loop without array destructuring assignment]********");
// for of loop without array destructuring assignment
for (const song of songs) {
      console.log(song);
}

// [ 'Bad Guy', 1 ]
// [ 'Old Town Road', 2 ]


console.log("********[farley, bacon]********");
for (const [farley, bacon] of songs) {
  console.log(`${farley}'s chart position is ${bacon}`);
}

console.log("********");

const myArr = ["Farley", "Asher", "Mr. Snuggles"];

for (const person of myArr) {

  console.log(person);
}

const myStr = "Farley";

for (const char of myStr) {

  console.log(char);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps
const object = {name: "Asher", age: 2, nickName: "Beelzebub"};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}

// expected output:
// name: Asher
// age: 2
// nickName: Beelzebub

// for (const key of object) {
//   console.log(`${key}: ${object[key]}`);
// }
// //object is not iterable

