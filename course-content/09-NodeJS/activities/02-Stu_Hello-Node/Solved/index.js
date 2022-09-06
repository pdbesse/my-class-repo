
//Unlike client-side JavaScript, we do not need to open dev tools in the browser. 
//Because our run-time environment is now the command line, our application returns its results there.
console.log("Hellooo, Node!");

//ReferenceError: window is not defined, when we try to print window to the console. 
//This means that while we're still writing JavaScript code inside node, there are a few differences.
// console.log(window);


// this in NodeJS global scope is the current module.exports object, not the global object.
// console.log(this);    // logs {}

module.exports.farley = "meow";


console.log(this);   //  { farley: "meow" }

//console.log(this);// inside a function, 
//this will point to the global nodeJS scope object which contains 
//all NodeJS common properties and methods such as require(), module, exports, console...

function printGlobal(){
  console.log(this);
};

printGlobal();
// OR
console.log(global);


// prompt("Hello World!");//nope :( 

// There are a few things we can do in the browser that we can't do in node, 
//but we'll soon see that there are things we can do in node that we can't do in the browser.



