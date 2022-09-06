// Ensure the document is rendered when manipulating DOM elements
// Assemble: Create/select DOM elements
var rootEl = $('#root');


// Starting from the root element, `rootEl`, select all the boxes and turn them white.
//We use the find() method to search all descendant elements with a selector. Then we use the css() method to change the styling:
rootEl.find('li').css('background-color', 'white');
// Alternatively
// rootEl.children().children().css("background-color", "white");
// Alternatively
//  $('li').each(function(i, element){
//  	$(element).css("background-color", "white");
//  }) 


// Starting from rootEl, what is the statement that will use "O" to block the "X" from winning
// Create each row's selection to easily choose the appropriate square
// `eq(0)` or `first()` is the `<h1>`
console.log("rootEl.children()", rootEl.children());
var rowOne = rootEl.children().eq(1).children();
// var rowOne = $("#row-one");
var rowTwo = rootEl.children().eq(2).children();
//We can chain the methods together to combine searches. We can compartmentalize the search by row to make them more legible:
var rowThree = rootEl.children().last().children();
// console.log(rootEl.children().last().children());
//We use first(), to select the first element of the set of returned elements. We use the text("O") to insert the text O:
rowThree.first().text('O');
// Alternatively: 
// rowThree.eq(0).text("O");

// Starting from the bottom row, middle square or `.item-c2`, what is the statement that will win the game using "O"
//We use closest("main"), to select all the ancestor elements that is a <main>:
$('.item-b3').closest('main').children().children().eq(0).text('O');
// Alternatively go up each parent, one level at a time
// $(".item-b3").parent().parent().children().eq(1).eq(0).text("O");
$('.item-b3').closest('main').children().eq(1).children().eq(0).text("O");

// Alternatively 
// rootEl.children().eq(3).children().eq(0).text('O');
// rootEl.children().last().children().first().text('O');

// rootEl.children().eq(1).children().eq(0).text('O');





