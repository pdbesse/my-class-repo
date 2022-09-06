function keydownAction(event) {
  console.log(event);
  // The key property holds the value of the key press
  // We use the key property to access the value of the pressed key and store it in a variable
  var keyPress = event.key;
  // The code property holds the key's code 
  // We use the code property to access the key's code
  var keyCode = event.code;
  // Updates content on page
  // We display the pressed key, key code, and status on the page by setting the element's content using textContent
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  // Updates event to KEYUP Event when key is released
  // document.querySelector("#status").textContent = "KEYUP Event";
  // document.querySelector("#status").textContent = "<h1>KEYUP Event</h1>";
  // document.querySelector("#status").innerHTML = "KEYUP Event";
  // document.querySelector("#status").innerHTML = "<h1>KEYUP Event</h1>";
}
// Adds listener for keydown event
// We attach an addEventListener() method to the document and set the first parameter to keydown, which will cause the event to occur when the key is pressed down. (In contrast, keyup occurs when the key is released.) 
document.addEventListener("keydown", keydownAction);
// Adds listener for keyup event
document.addEventListener("keyup", keyupAction);
