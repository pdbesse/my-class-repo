// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
function Developer(name, tech) {
  this.name = name;
  this.tech = tech;
  this.introduction = () => {
    console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
  };
}

// Creates a new object using the 'Developer' constructor
const rita = new Developer('Rita', 'JavaScript');
const bob = new Developer('Bob', 'CSS');

console.log(rita);
// Calls the 'introduction()' method on the new object
console.log(rita.introduction);
bob.introduction();
// bob.age = 22;
// rita.yell = function(){....}
