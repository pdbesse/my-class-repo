// Follow the thread of execution 
// 1) greeting is stored in the global execution context
const greeting = 'Hello';

// 2) sayHello is stored in the global execution context
function sayHello(name) {
  // 5) Once the sayHello execution context is created, "Gabby" is assigned to name
  // 6) salutation is stored in the function execution context of sayHello. It is assigned the string, 'how are you?'
  const salutation = 'how are you?';

  // 7) The global execution context as well as the local function execution context are accessible
  console.log(`${greeting} ${name}, ${salutation}`);
}

// 3) The alert is a Web API, once resolved, is stored in the callback queue then the call stack to be processed
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) 
// to keep track of its place in a script that calls multiple functions — 
// what function is currently being run and what functions are called from within that function, etc.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking
// blocking - we have to wait until this completes before we can proceed
// Legacy exceptions exist like alert or synchronous XHR, but it is considered good practice to avoid them.
alert("What's up doc?");

// 4) Calling sayHello, places it on the call stack which creates a new function execution context
sayHello("Gabby");
