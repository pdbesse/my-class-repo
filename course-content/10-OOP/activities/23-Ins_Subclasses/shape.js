class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
    this.example = "I am in the Shape";
  }

  printInfo() {
    // console.log(`Area: ${this.area}`);
    // console.log(`Perimeter: ${this.perimeter}`);
    for (const key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

const shape = new Shape(10, 10);
shape.printInfo();
module.exports = Shape;

// class mammal {
//   constructor() {
//     this.hair = true;
//     this.warmBlooded = true;
//     this.cute = true;
//   }

// }