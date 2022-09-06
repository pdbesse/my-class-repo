const OverloadDemo = function () {
//In the following example, the area() method will return the area of a rectangle based on how many arguments are passed into it:
  this.area = function (x, y) {
    console.log('x = ', x);
    //We use a conditional statement to check whether y is passed in. If there is no y argument, then we log y is not provided—along with the area of the square—into the console, as shown in the following example:
    if (!y) {
      console.log('y is not provided');
      //The Math.pow() function returns the base to the exponent power, as in baseexponent, the base and the exponent are in decimal numeral system.
      //Math.pow(7, 2);    // 49
      return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
    }
    //Otherwise, we log the value of y along with the area of the rectangle, as follows:
    console.log('y = ', y);
    return `\nThe area of the rectangle is ${x * y} sq units`;
  };
};

const rectangle = new OverloadDemo();
// We see that x = 5 and y = 7, so the area of the rectangle is calculated to be 35 sq units.
// But then we see that x = 5 and y is not provided. That implies that this is a square, so the area of the square is 25 sq units.
console.log('rectangle.area(5, 7)', rectangle.area(5, 7));
console.log('rectangle.area(5)', rectangle.area(5));
