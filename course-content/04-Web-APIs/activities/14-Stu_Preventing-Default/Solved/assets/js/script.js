var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

//Inside the addTip function, we add event.preventDefault() to the top of the code block. This will stop the browser from clearing the information in the text fields by default.
function addTip(event) {

  console.log(event);
  // Prevent default action
  event.preventDefault();
  // Store tip and total calculations in variables

  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  
  if(tipEl.value !== "" && totalEl.value !== ""){
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    // Update HTML with tip and total
    document.querySelector("#tip-amount").textContent = tipAmount;
    // Use toFixed() to limit to two decimal places
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
  } else {
    document.querySelector("#new-total").textContent = "Please Enter Numbers";
  }
  
}

// Add listener to submit element
//To fix this, we add a line of code to the action that we want to have performed when we click. In this case, the addEventListener() sets up the addTip function to be executed when the button is clicked
submitEl.addEventListener("click", addTip);

// submitEl.addEventListener("click", function(e){
//   addTip(e, "meow", "bark");
// });








