//We use querySelector() to select the DOM elements and assign them to variables
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

//In the renderLastRegistered() function, we query localStorage using the getItem() method for both email and password strings
function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");
//If either email or password is null, we exit the function with return. Otherwise, we render the values using the textContent property in the userEmailSpan and userPasswordSpan elements
  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

//We use addEventListener() on the signUpButton and listen for a click event. We prevent the browser's default action using event.preventDefault()
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

//We use querySelector() and the value property to assign the values in the form fields to email and password variables
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

//We store the values in localStorage using the setItem() method and call the renderLastRegistered() method. If the email or password strings are empty, we display an error message. Otherwise, we display a message indicating that the registration is successful.
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    // userEmailSpan.textContent = email;
    // userPasswordSpan.textContent = password;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();
    
  }
});
