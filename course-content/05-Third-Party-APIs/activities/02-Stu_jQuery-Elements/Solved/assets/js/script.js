// Select the existing DOM element, <div id="empty-div">, and assign to a new variable
//We begin by using the jQuery ID selector, $("#root"), and assigning it to a variable rootEl.
var rootEl = $('#root');
//We can use this variable, rootEl, to modify the <div id="root"> with jQuery methods.


// Create a `<p>` element to store the quote's author and assign to a new variable
//We can also create elements by placing the angle brackets around the element:
var authorEl = $('<p>');

// Add text to the author element
//We can add text content with the text() method:
authorEl.text('~ Carol Dweck');

// Add the class `plain` to the author element
//We can assign a class using the addClass() method:
// authorEl.attr('class','plain');
authorEl.addClass('plain');

// Create a `<h1>` element and assign to new variable
//We can create an <h1> element for the quote text:
var quoteEl = $('<h1>');

// Add a meaningful quote to the quote element
//We can add text content to the quote element with the text() method:
quoteEl.text(
  'Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.'
);

// Apply the class `fancy` to the quote element
//We can also add class or any attribute with the attr() method:
quoteEl.attr('class', 'fancy');

// Attach the author element to the quote element
//We attach the author element to the quote:
quoteEl.append(authorEl);

// Append the quote element to the page
//We can append the quote element to the page with append():
rootEl.append(quoteEl);
