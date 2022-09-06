var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  //To prevent that action from happening, we use event.preventDefault(). This allows us to retain the information in the text field after the click so that we can print the message
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
//The action that we want performed when a user clicks on an element can also be separated into its own named function. We add it as a parameter of the addEventListener() method by using the name of function. This is useful when we want to separate the logic or use the same action in multiple places.
submitEl.addEventListener("click", showResponse);
// submitEl.addEventListener("click", function (farley) {
//   // Prevent default action
//   //To prevent that action from happening, we use event.preventDefault(). This allows us to retain the information in the text field after the click so that we can print the message
//   farley.preventDefault();
//   console.log(farley);
//   var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//   submissionResponseEl.textContent = response;
// });
