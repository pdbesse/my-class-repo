// 'use strict'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// First, the value passed as this to a function in strict mode is not forced into being an object (a.k.a. "boxed").
// Thus for a strict mode function, the specified this is not boxed into an object, and if unspecified, this will be undefined:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#securing_javascript

// In the browser, the keyword 'this' in the Global Execution Context is the window object
const globalThis = this;
function myFuncA() {
  console.log('globalThis', globalThis);
  // What happens to the value of this in myFuncA if we add use strict?
  // this becomes undefined in the myFuncA because it was not assigned.
  console.log('myFuncAThis', this);
  // since this was not assigned by the call, it will default to the global object
  console.log(globalThis === this);
}



myFuncA();

const objB = {
  myFuncB: function () {
    console.log('globalThis', globalThis);
    console.log('myFuncBThis', this);
    // In the FEC, a new reference to this is created
    console.log("myFuncB: ", globalThis === this);
  }
};

objB.myFuncB();

// arrow function does not have its own bindings to this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// const objC = {
//   myFuncC:  () =>  {
//     console.log('globalThis', globalThis);
//     // refers to the window - arrow function does not have its own bindings to this 
//     console.log('myFuncCThis', this);
//     // In the FEC, a new reference to this is created
//     console.log("myFuncC: ", globalThis === this);
//   }
// };

objC.myFuncC();
// keyword this reference depends on how the function is called

