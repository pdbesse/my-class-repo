// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");//Hodor is thinking...
    setTimeout(function() {
      console.log(this.name + "!!");//undefined!!
    }, 1000);
  }
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions don't have their own bindings to this

//An arrow function automatically binds to the context or object it's created inside of, 
//even if it is not a direct property of that object.
 
//The arrow function is created when saySomething is run, inside of person, 
//right before the setTimeout is run.

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");//Hodor is thinking...
    setTimeout(() => console.log(this.name + "!!!!", this), 1000);//Hodor!!!!, [Function: saySomething]
  }
};

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later







