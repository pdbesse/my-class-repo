// The default keyword "this" refers to the global object
// In a browser, the global object is the Window 

// Logs Window
//The this keyword refers an object. The global object is the open browser window. You can see this at work in the following example:
console.log(this);
var aaa = "I am a global variable stored on the window";
function globalObjFun(){
  console.log(this);
}
globalObjFun();
// When the keyword "this" is used inside of an object like planet, "this" belongs to that object
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  isPopulated: true,
  population: "7.594 billion",
  //When we use this inside an object like planet, the keyword this belongs to that object and is used to refer to the object's properties, as shown in the following example:
  logFacts: function () {
     //Logs "This planet's name is Earth"
     console.log(this);//The whole object
     console.log("This planet's name is " + this.name);
     //Logs "This planet's age is 4.543 billion years"
	 console.log("This planet's age is " + this.age);
  },
  //When we call an object's method, this refers to the object that the method belongs to. Because logPopulation belongs to the planet object in the following example, this refers to planet:
  logPopulation: function () {
    if (this.isPopulated) {
      // Logs "This planet's population is 7.594 billion"
	  console.log("This planet's population is " + this.population);
	} else {
	  console.log("The planet is unpopulated");
	}   
  }
};

// Calls object methods
planet.logFacts();
planet.logPopulation();


var car = {

        // Properties of our car object.
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        // Creating the driveToWork method.
        // A method is a function associated with an object.
        driveToWork: function() {

          // When we say "this" (as in this.mileage) we are referring to the object the method is a part of.
          // In this case, we will alert the mileage of the car object.
          console.log("Old Mileage: " + this.mileage);
      

          // Adding 8 to the car's mileage.
          this.mileage = this.mileage + 8;

          // Alerting the car's new mileage.
          console.log("New mileage: " + this.mileage);
        },

        // The driveAroundWorld method adds 24,000 miles to our car, sets isWorking to false, and makes some alerts.
        driveAroundWorld: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          alert("New Mileage: " + this.mileage);
          alert("Car needs a tuneup!");

          this.isWorking = false;
        },

        // The getTuneUp method sets isWorking to true and alerts a message.
        getTuneUp: function() {
          alert("Car is ready to go!");
          this.isWorking = true;
        },

        // The honk method alerts a honking message.
        honk: function() {
          alert("Honk! Honk!");
        }
      };


      // How would we log...

      // The car's make?
      console.log(car.make);

      // // The car's model?
      console.log(car.model);

      // // The car's mileage?
      console.log(car.mileage);

      // // How would we run the car's driveToWork method?
      car.driveToWork();

      // // How would we run the car's driveAroundWorld method?
      car.driveAroundWorld();

      // // How would we run the getTuneUp method?
      car.getTuneUp();

      // // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      var baby1 = {
        name: "Asher",
        age: 2,
        message: "CAR CAR CAR CAR",
        destroyEars: function(){
          console.log(this.message);
        }
      };

      // baby1.destroyEars();

      var baby2 = {
        name: "BAM BAM",
        age: 1,
        message: "WuvYou... AAAAAAAAAGAGHKGAHJGAJHGAJ",
        destroyEars: function(){
          console.log(this.message);
        }
      };

      var baby3 = {
        name: "BAM Sage",
        age: 1,
        message: "BAHAHABAHAB",
        destroyEars: function(){
          console.log(this.message);
        },
        increaseAge: function(){
          this.age++
        }
      };
      // var message = "yippeeeeee";
      // this.message

      var babies = [baby1,baby2,baby3];

      
      for(var i =0; i < babies.length; i++){
        babies[i].destroyEars();
      }
