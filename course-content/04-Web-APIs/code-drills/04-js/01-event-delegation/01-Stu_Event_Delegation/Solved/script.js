var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob"}];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  people.push({ name: name });
  li.id = people.lengt -1;
  li.innerHTML = name + " <button>edit</button>";

  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  //check to see if the element clicked is a button
  if (event.target.matches("button")) {
    //prevent the default behavior of a button nested within a form tag
    event.preventDefault();

    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    var name = people[currentId].name;
    var description = people[currentId].description;
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

closeEl.addEventListener("click", close);

//when modal is open - curentId has been saved as global variable - use that variable to update or set key
//key of description with an associated value
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});

addBtn.addEventListener("click", addPersonToList);

//add so I can close modal (without saving) when it is clicked on 
peopleListEl.addEventListener("click", handleClick);



document.addEventListener("click", function(event) {
  if (event.target === modalEl) {
    close();
  }
});