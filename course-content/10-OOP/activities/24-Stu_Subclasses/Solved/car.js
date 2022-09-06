const Vehicle = require('./vehicle');

class Car extends Vehicle {
  constructor(id, color, passengers, numberOfWheels, sound) {
    super(id, numberOfWheels, sound)
    // super(id, 4, "beep");
    this.color = color;
    this.passengers = passengers;
  }

  // useHorn() {
  //   console.log(this.sound);
  // }

  checkPassengers() {
    if (this.passengers.length > 4) {
      console.log(
        'This car only seats 4 people. You have too many passengers!'
      );
    } else {
      console.log(`You have room for ${4 - this.passengers.length} people.`);
    }
  }
  
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers, 4, 'beep');

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();




//------ Car and Boat on same page!?! ------


// class Boat extends Vehicle {
//   constructor(id, type, crew) {
//     super(id, 0, 'bwom');
//     this.type = type;
//     this.crew = crew;
//   }

//   useHorn() {
//     console.log(this.sound);
//   }

//   crewSoundOff() {
//     this.crew.forEach((member) => {
//       console.log(`${member} reporting for duty!`);
//     });
//   }
// }

// const boatPassengers = [
//   'Blackbeard',
//   'Mary Read',
//   'Henry Morgan',
//   'Madame Cheng',
// ];

// const boat = new Boat(16, 'sailboat', boatPassengers);

// console.log('---BOAT---');
// boat.printInfo();
// boat.useHorn();
// boat.crewSoundOff();


// module.exports = {
//   Boat: Boat,
//   Car: Car
// };