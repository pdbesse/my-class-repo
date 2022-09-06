class Order {
  constructor(item) {
    this.item = item;
    //Order.lastId to define what's known as a static value on a class. 
    //This also works with constructor functions.
    // Order.lastId++;
    // this.id = Order.lastId;
    //or
    this.id = Math.floor(Math.random() * 99) + 1;
  }
}
// Order.lastId = 0;

module.exports = Order;
