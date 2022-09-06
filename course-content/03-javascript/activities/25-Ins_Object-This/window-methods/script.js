

var userFavColor = prompt("What is your favorite color?");
alert("You stated that " + userFavColor + " is your favorite color.");
var favColorConfirmation = confirm("Your Favorite Color is " + userFavColor +",correct?");
if (favColorConfirmation){
	alert(userFavColor + " is your favorite color")
}else{
	alert("Looks like you are undecided");
}
