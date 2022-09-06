// Objects can store more than primitive data types like strings, booleans and numbers
//An object's properties can also hold lists of values or even functions, as shown in the following code:
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
  // Objects can store arrays in a key-value pair
  //We use arrays to store lists of values in key-value pairs, as follows:
  neighboringPlanets: ["Mars", "Venus"],
  // Objects can also store methods
  //To declare a method, we assign a key. A method is simply a function associated with an object. See the following code for an example:
  tellFunFact: function () {
    console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
  },
  showWarning: function () {
    console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
  }
};

// To access a value in an array, use the name of the object, the key and the index.
// Logs "Mars" using dot notation
//To access an element in an array contained in an object, we can use the object's name and key, plus the index of the element—as shown in the following example:
console.log(planet.neighboringPlanets[0]);

// Logs "Venus" using bracket notation
console.log(planet["neighboringPlanets"][1]);

// To call a method, use the name of the object and the key. Don't forget the ()!
//To call or invoke an object's method, we use the object's name followed by the assigned key. Don't forget the (), shown in the following example:
planet.tellFunFact();
planet.showWarning();
  
