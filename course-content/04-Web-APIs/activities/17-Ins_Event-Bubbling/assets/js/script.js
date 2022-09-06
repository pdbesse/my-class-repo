var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");


// When we click on the button, the changeBlue function fires and the button turns blue
// To stop this from happening, we use event.stopPropagation(). When we add the method at the top of each function that change the color, the event bubbling stops.
function changeBlue(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #601A4A"
  );
}

function changeOrange(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #EE442F; color: white;"
  );
}

//The click event also travels up the DOM. Because the orange box is also listening for a click, the color changes too. The same thing happens with the purple box. 
outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);

