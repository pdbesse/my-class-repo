class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }

}

const shapeOne = new Shape(25, 30);
const shapeTwo = new Shape(25, 10);
const shapeThree = new Shape(19, 25);
const shapeFour = new Shape(250, 250);


shapeOne.printInfo();
