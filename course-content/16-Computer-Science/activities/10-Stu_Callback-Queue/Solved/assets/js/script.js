// wait 8 seconds in a separate thread
// We can leverage the asynchronous behavior of JavaScript by placing the delay in a setTimeout().
// Delaying with a setTimeout() allows the page to render and time for the user to interact with the other elements.
// Best practice is to use timers when creating intentional delays 
// instead of blocking the event loop with synchronous logic.**
setTimeout(() => {
  // remove the class that hides the element
  document.querySelector('form button')
    .classList.remove('display-none');
}, 8000);
