var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

function saveLastGrade() {
  // Save related form data as an object
  var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim()
  };
  // Use .setItem() to s
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
}

//We use a function to hold the code to retrieve and render the data—making the code easily reuseable
function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  // Inside the renderLastGrade() function, we use the method getItem() to retrieve the data from storage
  //Because the return data is stringified, we use the JSON method JSON.parse() to convert it back into an object. We then store the object in a variable so that we can use it in the code
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  // Check if data is returned, if not exit out of the function
  //If data is returned from storage, we use innerHTML to render the data to the page.
  if (lastGrade !== null) {
  document.getElementById("saved-name").innerHTML = lastGrade.student;
  document.getElementById("saved-grade").innerHTML = lastGrade.grade;
  document.getElementById("saved-comment").innerHTML = lastGrade.comment;
  //Else, if null is returned, we use return to exit out of the function
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  saveLastGrade();
  renderLastGrade();
});

// The init() function fires when the page is loaded
//We want the data retrieved and rendered when we load the page. 
//So we put it in a function called init(), which holds the code that we want executed when the page first loads and then calls the function. If data has previously been saved using localStorage, the data will appear on the page. 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();
