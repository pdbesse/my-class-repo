var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

//We add a click event to the signUpButton element and use event.preventDefault() to cancel the browser's default form action
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  //When the button is clicked, we store the current values of the form in an object. We use the string method trim() to eliminate any whitespace and leave only the text
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  //We use the JSON method JSON.stringify() to turn the object into a string
  //We use setItem() to store the stringified object with localStorage
  localStorage.setItem("user", JSON.stringify(user));
  
});
