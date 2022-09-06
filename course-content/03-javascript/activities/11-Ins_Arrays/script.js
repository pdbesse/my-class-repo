// So far, we have been storing one piece of data in variables
var name = "Farley";
var pets = 5; 
var isStudent = true;

// To store groups of data in a single variable, we use arrays
var namesArr = ["Farley", "Asher", "Sage", "Beelzebub"];

// The entire array can be accessed by using the array's name 
console.log(namesArr);

// To log a single element, we use the name of the array with the index in brackets
console.log("welcome to the class " + namesArr[0]);
console.log(namesArr[1]);
console.log(namesArr[2]);
console.log(namesArr[3]);


// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(namesArr[0]); 

// We can also use index to replace data in an array
// Returns "Beelzebub"
console.log(namesArr[3]);

//Replaces "Beelzebub" with "Faye"

namesArr[3] = "Faye"; 

// Logs "Faye"
console.log(namesArr[3]);

// We use the array's length property to determine how many elements are in the array
console.log(namesArr.length);

namesArr[4] = "Bob";
console.log(namesArr);//['Farley', 'Asher', 'Sage', 'Faye', 'Bob']
// namesArr.push("Bob");
console.log(namesArr[4]);//Bob
console.log(namesArr.length);//5

namesArr[0] = "Wittles";
console.log(namesArr);//['Wittles', 'Asher', 'Sage', 'Faye']

if(namesArr[0] === "Wittles"){
	console.log("Message");
}


var temp = namesArr[0];

namesArr[0] = namesArr[2];

namesArr[2] = temp;

console.log(namesArr);//['Sage', 'Asher', ,'Wittles' 'Faye']

namesArr[9] = "Mr. Snuggels";

console.log(namesArr[8]);//undefined

