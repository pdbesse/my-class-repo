var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var input = $('#shopping-input');
// var btn = $('.btn');

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var shoppingItem = $('input[name="shopping-input"]').val();
  // var shoppingItem = $('#shopping-input').val();
 


  // if there's nothing in the form entered, don't print to the page
  //If we click Submit and nothing is in the <input>, do nothing:
  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // print to the page
  // var li = $("<li>");
  // li.text(shoppingItem);
  // shoppingListEl.append(li);
  shoppingListEl.append('<li>' + shoppingItem + '</li>');

  // clear the form input element
  //We can get the value entered in the form <input> by selecting it by its name attribute and using .val():
    $('input[name="shopping-input"]').val('');
  //  $('input.form-input[name="shopping-input"]').val('');
  // $('input.form-input.w-100[name="shopping-input"]').val('');
}

// Create a submit event listener on the form element
//We attach the submit event to the form element using .on():
shoppingFormEl.on('submit', handleFormSubmit);

// btn.on('click', handleFormSubmit);//good aswell
