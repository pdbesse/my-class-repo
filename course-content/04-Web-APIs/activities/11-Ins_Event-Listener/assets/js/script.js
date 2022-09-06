// Access toggle switch HTML element
//We add the addEventListener() method to listen for an event on the themeSwitcher element, as follows:
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
//The addEventListener() method takes two parameters. The first is the type of event, which we set to click—as shown in the following example—because we want something to happen when a user clicks on the themeSwitcher element:
//The second parameter is the action that we want performed when a user clicks—that is, a function, as shown in the following example:
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  //Inside the function, we write the code that we want executed every time the event happens. We use setAttribute() to change the background to a light color if the background is in dark mode
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light container");
  }
  // If mode is light, apply dark background 
  //Else, when a user clicks, we set the background to a dark mode by setting the dark class
  else {
    mode = "dark";
    container.setAttribute("class", "dark container");
  }
});
