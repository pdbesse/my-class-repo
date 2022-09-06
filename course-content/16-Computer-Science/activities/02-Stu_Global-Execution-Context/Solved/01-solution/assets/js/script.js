// 1) Where is carNoise stored?
// Global execution context (GEC)
// Scope refers to the accessibility of variables, 
// whereas context refers to the object to which the function belongs.


const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global execution context (GEC)

// sidenote: This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object, unlike var variables.
// This declaration creates a constant whose scope can be either global or local to the block in which it is declared. 
// Global constants do not become properties of the window object, unlike var variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const#description

// An Object Environment Record on the other hand uses an actual JavaScript object to store bindings.

// A Declarative Environment Record is basically your standard environment that you get when calling a function. All bindings (variables, constants, etc) are defined in some internal data structure that cannot be accessed from normal code.
// The declarative environment contains the let, const, class, etc declarations.

const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // When goFast is invoked, the argument of the function is assigned to the parameter, speed, 
  // in the functional execution context of goFast
  // 5) Where is makeNoise stored?
  // makeNoise is stored in the function execution context of goFast
  const makeNoise = sound => { // new function execution context (FEC)
    // carNoise is then assigned to sound in the function execution context of makeNoise
    // console.log is then placed on the call stack which then logs the statement
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Since confirm is a Web API, once it resolves, goFast() is placed in the callback queue, then onto the call stack to be executed.
if(confirm("Do you want to go fast?")) {
  goFast(80);
}

//
for loop {
   timers
   handle async stuff
   execute code -> when we see a function put it on the queue
   invoke things on the callback queue [async function to finish, console.log, fn, fn, fn...];
}
