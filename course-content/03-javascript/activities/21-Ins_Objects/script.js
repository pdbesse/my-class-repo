// Objects are a collection of properties
//JavaScript objects are a lot like objects in real life. They are things that have distinct characteristics or properties. 
//For this first JavaScript object, the thing we will create is a planet.
//We use object literal notation to create the planet object, and we use curly brackets {} to hold the values, as follows:

var planet = {
  // Properties are made up of key-value pairs
  //We use key-value pairs to give the properties a name and a value, as shown in the following example:
  //Objects usually have many related properties that help to define the object, as shown in the following example:
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};



planet.population

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"
//To access the value stored in a property, we use dot notation, as follows:	
console.log(planet.name);
// console.log(planet["name"]);

// Uses bracket notation and logs "Earth"
//We can also use bracket notation to access a value. When we use bracket notation, the key goes in quotes, as shown in the following example:
console.log(planet["is Nice"]);
planet.isNice = true;

planet["isNice"] = false;

//========================================

var gandalf = {
      "real name": "Gandalf",
      "age (est)": 11000,
      race: "Maia",
      haveRetirementPlan: true,
      aliases: [
        "Greyhame",
        "Stormcrow",
        "Mithrandir",
        "Gandalf the Grey",
        "Gandalf the White"
      ],
      favoriteSong: {
        "name": "The Road Goes Ever On",
        "artist": "Bilbo Baggins" 
      }

    };

    console.log(gandalf.favoriteSong.name);

    console.log(gandalf["real name"]);//"Gandalf"



    console.log(gandalf.aliases[1]);//"Stormcrow"

    // Object properties can be accessed with "bracket notation"
    console.log("My name is " + gandalf["real name"]);

    // Or with "dot notation" if the property has no spaces
    if (gandalf.haveRetirementPlan) {

      // Or with a variable that matches the name of the property
      var ageProperty = "age (est)";
      var years = gandalf[ageProperty];

      console.log("My 401k has been gathering interest for " + years + " years!");
    }

    // You can access arrays and their properties from an object
    console.log("I have more than " + gandalf.aliases.length + " aliases");

    // Non-existent properties return undefined
    console.log("My designation is " + gandalf["designation"]);

    // Objects can also contain other objects, whose properties can be accessed by chaining dot notation
    console.log("My favorite song was written by " + gandalf.favoriteSong.artist);

    // Or with bracket notation
    console.log("My favorite song is " + gandalf["favoriteSong"]["name"]);

    var baby = {
      name: "Asher",
      age: 2,
      "is cute": true,
      "isLoud": true,
      toys: ["truck", "ball", "Mr. Squiggles"],
      books: ["Pout Pout Fish", "The Adventures of John Muir", "The feelings Book"]
    }


    console.log(baby.books[0])

    console.log(baby.isLoud)

    console.log("Name: " + baby.name);
    console.log(baby.food);//undefined
    baby.food = "apples";
    console.log(baby.food);//apples
    baby.name = "Asher the Great";
    baby.age = 3;
    baby.location = "CA";
    baby.location = "WA";
    console.log(baby);
    console.log(baby.books[0]);
