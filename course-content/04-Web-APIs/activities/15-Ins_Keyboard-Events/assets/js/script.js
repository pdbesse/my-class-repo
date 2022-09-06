var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

var elements = [
  h1El, h2El, h3El, pEl
];

var typeface;

// Change event
//We attach a change event to the <select> element using addEventListener(). When the user selects a value from the dropdown, the function will execute. Note that the first parameter is the event, so we use change
typefaceEl.addEventListener("change", function(event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector(".container").style.fontFamily = typeface;
});

// Keydown event
//We also attach a keyboard event to the <textarea> element using addEventListener(). A keydown event is fired when a key is pressed down
textAreaEl.addEventListener("keydown", function(event) {
  console.log(event);
  // Access value of pressed key with key property
  //Keyboard events have two commonly used properties. The key property returns the value of the key pressed. The code property returns the key's code. We use event.key to access the value of the pressed key
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      //We use the textContent property to set the content of an element to the pressed key's value
      element.textContent += event.key;
      // element.textContent = element.textContent + event.key;
    });
  }
});

clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });
});
