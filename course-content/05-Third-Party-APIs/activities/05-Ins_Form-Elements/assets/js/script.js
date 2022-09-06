var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  //We use the jQuery .val() method on form elements to retrieve the input values:
  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];

  // Loop through checked options to store in array
  //Because there can be more than one checked item, we need to select the checked elements and store them in an array using the jQuery $.each() method:
  // $.each(checkedEl, function () {
  //   console.log("this");
  //   console.log(this.value);
  //   console.log($(this));
  //   selected.push($(this).val());
  // });

  
  $.each(checkedEl, function (i, elm) {
    console.log("elm");
    console.log(elm);
    console.log(elm.value);
    console.log($(elm));
    selected.push($(elm).val());
  });
  console.log('Toppings: ', selected.join(', '));


  // Clear input fields
  //We can clear form elements by using CSS selectors and setting an empty string value to them, but the checkbox requires a different type of reset:
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  // $('input').val('');
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
//We can use .on('submit', ...) as the click event for the <form> element and pass handleFormSubmit() as the callback function:
formEl.on('submit', handleFormSubmit);
