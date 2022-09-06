// Select the HTML element that we want to attach our event listener too.
const buttons = document.getElementsByTagName('button');

const clickHandlerFactory = function () {
  console.log("this is the button", this);
  // Create a 'count' variable which will be a part of the clickHadler function's lexical environment.
  let count = 0;

  // return an inner function which creates closure. 
  function clickHandler() {
    console.log("this button", this);
   // Increase the locally scoped 'count' variable by one. 
    count++;
   //Use a template literal to display the 'count' variable onto the button element. 
    this.textContent = `Clicks: ${count}`;
  };
  return clickHandler;
};

// Instead of attaching the event listener to the container holding our buttons, we loop through our buttons and attach an event listener to each one.
// Now each button has a backpack with its own reference to `count` instead of a reference to a global variable or attribute.
// Instead of doing a costly reads on the DOM, we now only mutate the private `count` variable.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandlerFactory());
}