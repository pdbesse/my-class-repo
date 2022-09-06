const arya = {
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

const jaime = {
  name: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:

const aryaName = arya.name;
const aryaParents = arya.parents;

console.log(aryaName); // logs `"Arya Stark"`
console.log(aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

const { name: aryaNameRename, parents } = arya;

console.log(aryaNameRename); // logs `"Arya Stark"`
console.log(parents); // logs `['Eddard Stark', 'Catelyn Stark']`

// We can also rename our destructured properties like so:

const { name: jaimeName } = jaime;
console.log(jaimeName); // logs `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

const logCharacter = (character) =>

  console.log(
    `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
  );

logCharacter(arya);

// But now we can do this:

const betterLogCharacter = ({ name, parents }) =>
  console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

betterLogCharacter(jaime);

// ---------------

// // ----- Object Destructuring ------
var luke = { occupation: "Jedi", father: "Anakin" };
var leia = { occupation: "Jedi", father: "Anakin" };
// ES5
var occupation = luke.occupation; // Jedi
var father = luke.father; // Anakin

// ES6 - Destructuring
const { occupation: trade, father: pops} = luke;
// const { occupation , father} = leia;
var {occupation: leiaOccupation, father: poppa} = leia;

console.log("leiaOccupation: ", leiaOccupation);
console.log("poppa: ", poppa)


console.log(occupation); // Jedi
console.log(father); // Anakin

// ----- Array Destructuring ------
var racers = ["Anakin", "Gasgano", "Aldar Beedo", "Ebe E. Endocott"];
// ES5
var first = racers[0]; // Anakin
var second = racers[1]; // Gasgano
var others = racers.slice(2); // ['Aldar Beedo', 'Ebe E. Endocott']

// The ...spread operator can be used "spread" the contents of an existing array into a new one, similar to the concat method
var newRacers = [...racers, "Sebulba"];
//["Anakin", "Gasgano", "Aldar Beedo", "Ebe E. Endocott", "Sebulba"]


// ES6 - Array destructuring also using `...` rest pattern
var [farley, chicken, ...others] = newRacers;
console.log(first); // Anakin
console.log(second); // Gasgano
console.log(third)  //'Aldar Beedo'
console.log(others); // ['Ebe E. Endocott', 'Sebulba']
// NewRacers
//["Anakin", "Gasgano", "Aldar Beedo", "Ebe E. Endocott", "Sebulba"]



// ---------------
