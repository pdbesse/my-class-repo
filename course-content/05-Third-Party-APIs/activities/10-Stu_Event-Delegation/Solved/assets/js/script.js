var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

function handleRemoveItem(event) {
  console.log("Clicked");
  // convert button we pressed (`event.target`) to a jQuery DOM object
  //In the event handler, we use $(event.target) to select the button clicked by the user:
  console.log(event.target);
  var btnClicked = $(event.target);
  console.log(btnClicked);
  // var btnClicked = $(this);
  // get the parent `<li>` element from the button we pressed and remove it
  //We use traversing with .parent('li') to select the first parent element that matches a <li> and remove it:
  btnClicked.parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
// We can attach the on() event listener to the parent element, shoppingListEl, to listen for the click on the shopping list item buttons:
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
shoppingFormEl.on('submit', handleFormSubmit);
