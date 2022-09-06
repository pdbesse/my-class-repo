// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);//false
var expression2 = (x > 50);//false



// if(!expression1 && !expression2 ) {
// 	console.log("True ✅ True ✅");
// }

// Write Your JavaScript Code Here
// Check if both expressions are true using &&

// * It's done when the message "True ✅ False ❌" is logged when `expression1` is true. 

// * It's done when the message "False ❌ True ✅" is logged when `expression2` is true. 

// * It's done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false. 


	if(expression1 && expression2 ) {
	    console.log("True ✅ True ✅");

	// If both conditions are not true, check if expression1 is true
	} else if (expression1) {
	    console.log("True ✅ False ❌");

	// If expression1 is not true, then check if expression2 is true
	} else if ( expression2) {
	    console.log("False ❌ True ✅");

	// If none of the conditions above evaluate to true, both expressions must be false
	} else {
	    console.log("False ❌ False ❌");
	}



var age = "1";
var firstName = "Sage";

if(age === 1) {
	console.log("meow");
}else if (firstName === "Sage"){
	console.log("DADADADA");
}else if (firstName === "Asher"){
	console.log("Robots");
}else {
	console.log("I like Turtles");
}	


