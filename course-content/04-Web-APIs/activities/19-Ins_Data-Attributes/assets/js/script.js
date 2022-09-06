var imageContainer = document.querySelector(".img-container");

// Listen for any clicks within the img-container div
imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  console.log("I was clicked");
  console.log("element: ", element)
  console.log('element.matches("h1"): ', element.matches("h1"));
  console.log('element.matches("img"): ', element.matches("img"));
  // Check if the clicked element was an image
  if (element.matches("img")) {
    // Get the current value of the image's data-state attribute
    //We can access the information in a data attribute and store it in a variable using getAttribute(), as shown in the following example:
    var state = element.getAttribute("data-state");

    if (state === "still") {
   

      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      //We can also access the value of the data attribute through the dataset object
      // element.dataset.state = "animate";
      //We can set a data attribute using setAttribute(), as follows:
      element.setAttribute("data-state", "animate");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.getAttribute("data-animate"));
      // element.setAttribute("src", element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      // element.getAttribute("data-state");
      element.dataset.state = "still";
      // element.setAttribute("src", element.dataset.still);
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});
