var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// The following function renders items in a todo list as <li> elements
//We have stored to-do items in local storage and parsed them using JSON methods. Now we need to render each item. We will do this with the renderTodos() function.
//We use createElement() and appendChild() to render the to-do list. Because we will reuse this code, we store it in a function, just like we did with storeTodos()
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    // ["take a walk","study", take a nap]
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
//We've stored the to-do items, but we also need to be able to retrieve the data from storage. We will do this inside the init() function.
//init() is being invoked in script.js, so it will run every time the page loads.
//Inside of init(), we use getItem() and convert the data from a string to an array using JSON.parse(). To use the array in the code, we store it in a variable

function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderTodos();
}

//The storeTodos function stores an array using localStorage. First we stringify it using JSON.stringify(), then we set it to storage using setItem().
//We need to save to-do items to localStorage in a few places, so storing this action in the function storeTodos cleans up the code! 
function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
//We add an event listener to the to-do form so that when a user enters a to-do item, the data is stored on submit. The to-dos are stored and rendered using two helper functions, storeTodos() and renderTodos()
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// Add click event to todoList element
//Finally, we need to add an event listener to the completed button so that a user can remove to-do items. We do this by using the "data-index" of the button's parent element to remove the correct to-do item from the todos array.
//We call the storeTodos() and renderTodos() functions when the complete button is clicked, to store and render the updated list
todoList.addEventListener("click", function(event) {
  var element = event.target;
  console.log(element);
  console.log("I was clicked");

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
        // ["take a walk","code","study"]
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

// Calls init to retrieve data and render it to the page on load
init()
