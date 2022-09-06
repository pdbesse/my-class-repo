// Shout is declared in the global scope and is available to both functions 
//We declare the variable shout in the global scope so that it is available to all functions, 
//including justShout and shoutItAllOut, as shown in the following example:
var shout = "Shout";

function justShout() {
  console.log(shout + ", " + shout);
  return;
 }
 
function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
 }
 
justShout();
shoutItAllOut();
 
// Lions is declared locally so it is available only to the sayLions function
//In the following example, the variable animals has been declared locally 
//inside the sayLions function, so it is only available in that function:
function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

// console.log(animal);
 
// Tigers is declared locally so it only available to the sayTigers function 
//We declare the variable animals locally inside the sayTigers function. Since a locally 
//scoped variable is only accessed in the function where it is declared, 
//it doesn't change the value of the animal variable declared in sayLions. 
//In the following example, the sayLions function will use the value Lions, and the sayTigers function will use the value Tigers:
function sayTigers() {
  var animal = "Tigers";
  console.log("and " + animal + " and "); 
  return;
 }
 
// Variables of the same name should not be declared in global and local scope
// Kept global scope
//To avoid shadowing, or declaring a variable with the same name in the global and local scope, 
//we remove the bears variable in the local scope so that the sayBears function will log "Bears! OH MY!", as follows:

var bears = "Bears";
 
// Removed local scope
function sayBears() {
  console.log(bears + "! OH  MY!");
  return;
 }


sayLions();
sayTigers();
sayBears();
 
// Declaring sing in the outer function makes it available to the inner and outer function
//We declare the variable sing inside the outer function so that the value of sing is 
//available to everything inside the outer function, including the inner function. 
//Shown in the following example, this is called a nested function:
function singAlong() {
  // console.log(sing);
  var sing = "Sing";
  console.log(sing + ",");

  var singASong = function () {  
    sing = "La La La";
    console.log(sing + " a Song." );
   };
  console.log(sing);//Sing"
  singASong();
  console.log(sing);//"La La La"
 }
// console.log(sing);
singAlong();
 
