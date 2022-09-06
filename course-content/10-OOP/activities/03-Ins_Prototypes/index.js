// Array.prototype.forEach()
const myArray = [2, 4, 6, 8];

myArray.forEach((num) => console.log(num));

// String.prototype.toLowerCase()
const person = {
  name: 'Eric',
  age: 28,
  occupation: 'Full-Stack Web Developer',
};

console.log(person.occupation.toLowerCase());

// Prototype methods on constructor function
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
  
}

const superman = new Movie('Superman', 1978);

Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

superman.logInfo();


// ---------------------

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
 //  this.printInfo = function() {
 //  	console.log("Name: " + this.name + "\nPosition: " + this.position +
 //  	"\nAge: " + this.age + "\nLanguages: " + this.language);
	// };

}

var sally = new Programmer("Sally Smith", "Supreme CodeMaster", 33, "JavaScript");

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
};

// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();

console.log("----");

sally.printInfo();

//-----------------------------

//hmmm. 
var arr = [];
var arrTwo = [];

var arr = new Array();


//-----------------------------


function Animal(name, age) {
  this.name = name;
  this.age = age;
}

var centralStorange = {};

centralStorange.printinfo = function() {
  console.log(this.name + "...Yeah...I'm amazing...👻");
};

Programmer.prototype.printAwesome = centralStorange.printinfo;

Animal.prototype.printAwesome = function() {
  console.log(this.name + "...Yeah...I'm amazing...👻");
};

var farley = new Animal("Farley", 5);

console.log("-----")

farley.printAwesome();

console.log("-----")

bob.printAwesome();

console.log("----------Bob------------");

console.log(bob);
// Programmer {
//   name: 'Bob Smith',
//   position: 'Supreme CodeMaster',
//   age: 33,
//   language: 'JavaScript'
// }

console.log("----------Programmer.prototype------------");

console.log(Programmer.prototype);

// Programmer {
//   printInfo: [Function (anonymous)],
//   printAwesome: [Function: printinfo]
// }




// Prototype methods on constructor function
function Human(name, location, eyes) {

  this.name = name;
  this.location = location;
  this.eyes = eyes;
  this.age = 0;

  
}

const asher = new Human('Asher', "bay area", "Blue");
const pat = new Human('Pat', "bay area", "Brown");

Human.prototype.scream = function () {
  console.log(`AHHHHHH ${this.name}`);
};

asher.scream();
pat.scream();
