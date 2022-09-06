var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
	event.preventDefault();

	//When the button is clicked, we store the current values together as an object
	var studentGrade = {
	  student: student.value,
	  grade: grade.value,
	  comment: comment.value.trim()
	};

	//We cannot store an object directly using localStorage. So we use the JSON.stringify() method to convert the object into a string
	//The string can then be stored as a key-value pair in local storage using the setItem() method
	
	//Objects Setting
	localStorage.setItem("studentGradeStringify", JSON.stringify(studentGrade));
  	localStorage.setItem("studentGrade", studentGrade);

  //Array Setting
	localStorage.setItem("ArrayStringify", JSON.stringify(["studentGrade", 1,2 ]));
	localStorage.setItem("Array", ["studentGrade", 1,2 ]);

	renderMessage();

});

//Inside the renderMessage function, we retrieve the string and convert it back into an object with JSON.parse(). 
//If lastGrade is not null, we display a message for the user.
function renderMessage() {
 
	//Object Getting
  var lastGrade = JSON.parse(localStorage.getItem("studentGradeStringify"));
  // var lastGrade = localStorage.getItem("studentGrade");
  
  //Array Getting
  var arr = JSON.parse(localStorage.getItem("ArrayStringify"));
  console.log(arr[0])//"studentGrade" Beacause ["studentGrade", 1,2 ]

  var arrStr = localStorage.getItem("Array");
  // arrStr = "studentGrade,1,2"
  
  console.log(arrStr[0])//s Beacuse "studentGrade,1,2"
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
