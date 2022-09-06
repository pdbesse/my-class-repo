// Object customerDrink with three properties
//We declare a customerDrink object using object literal notation. We give the object three properties, as follows:
var customerDrink = {
  //We use key-value pairs to define each property, like in the following example:
  name: "coffee",
  sugars: 3,
  isReady: true
};

// This logs the entire object
//To access the whole object, we use the object's name, as follows:
console.log(customerDrink);

// Note that in dot notation, the name of the object is followed by the key
//We use dot notation to access a value stored in a key-value pair, as shown in the following example:
if (customerDrink.isReady) {
  console.log("Ready for pick-up: " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");

// Note that in bracket notation, the key is inside brackets and surrounded by quotes
//We can also use bracket notation to access a value, as follows:
} else {
  console.log("Still in order queue: " + customerDrink["name"] + " with " + customerDrink["sugars"] + " sugars.");
}
