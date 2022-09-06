var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    // We use getAttribute() to store the value of the clicked element's data-state attribute in a variable
    var state = element.getAttribute("data-state");

    // Use an if statement to conditionally render the number on the card
    // If the state is hidden, we use the dataset object to set the text content to the number
    if (state === "hidden") {
      // If the card is clicked while the state is "hidden", we set .textContent to the number 
      // element.textContent = element.dataset.number;
      element.textContent = element.getAttribute("data-number");
      // Using the dataset property, we change the state to visible because the user can now see the number
      // We also use the dataset object to set the value of state to be visible, because the number is now visible to the user.
      // element.dataset.state = "visible";
      element.setAttribute("data-state", "visible");
   
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      // If the state is visible, we empty the text content so that the number is removed
      element.textContent= "";
      // Use .setAttribute() method
      // 🔑 We also set the state's value to hidden using the setAttribute() method, because the user can't see the number.
      element.setAttribute("data-state", "hidden")
     
    }  
  }
  
});
