var count = 0;
//  Select increment and decrement button elements
//We use querySelector() to select the button elements
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
// We add an addEventListener() to the increment button and set the type of event to be a click
// The addEventListener() method's second parameter is a function that contains the action that we want to execute when the click event occurs. This function increments the count by 1 and calls the setCounterText() function to update the HTML.
incrementEl.addEventListener("click", function(e) {
  console.log(e);
  count = count + 1;
  setCounterText();
  // countEl.textContent = count;
});

// Attach event listener to decrement button element
//We repeat the process for the decrement button but use the decrement operator -- to decrease the count. We add a conditional statement so that the action is performed only if the count is greater than 0
decrementEl.addEventListener("click", function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    // count = count - 1;
    setCounterText();
  // countEl.textContent = count;
  }
});
