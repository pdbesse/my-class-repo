// ✔️ unshift()
// ✔️ pop()
// ✔️ concat()
// ✔️ toUpperCase()
var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// The unshift method adds an element to the beginning of the array 
//We use the unshift() array method to add an element to the beginning of the constellation array. 
//The value added to the array goes inside the parentheses (), like in the following example:
// constellations[0] = "Canis Major";//bye bye Orion
constellations.unshift("Canis Major");
console.log(constellations);

// The pop method removes the last element in the array
//We use the pop() method to remove the last element in the planets array, as follows:
planets.pop();
// var index = planets.indexOf("Mars");
// if(index !== -1){
// 	planets.splice(index, 1);
// }
// The original array is changed
console.log(planets);

//The concat method joins constellations and planets array and returns new array
//To join two arrays, we use the concat() method. This method, 
//shown in the following example, returns a new array named galaxy:
var galaxy = constellations.concat(planets);
// ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"]
//The galaxy and planet arrays are unchanged
console.log(planets);
console.log(constellations);
console.log(galaxy);

// The toUpperCase method makes all the letters in the string "polaris" capital letters
//We use the string method toUpperCase(), shown in the following example, 
//to return the new string "POLARIS":
var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);
// The original string is unchanged
console.log(star);
