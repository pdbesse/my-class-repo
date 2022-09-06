// Selects element by class
//We store the interval in a variable. This is an important step, so that we can get the interval to stop. 
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 11;

function setTime() {
  // Sets interval in variable
  //The setInterval() method takes a function as its first argument
  var timerInterval = setInterval(function() {
    //The function is the action that we want to be evaluated at each interval. This function prints a message at each interval
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till something 'Adorable'.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
      clearInterval(timerInterval);
      // Calls function to send us to a new location
      redirectUs();
    }
    //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
  }, 1000);
}


function redirectUs() {
  document.location = 'https://www.reddit.com/r/Awwww'

}

setTime();
console.log("document.URL", document.URL);
console.log("document.location", document.location);
console.log("document.location.href", document.location.href);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/location

// The Document.location read-only property returns a Location object, which contains information about the URL of the document and provides methods for changing that URL and loading another URL.

// Though Document.location is a read-only Location object, you can also assign a string to it. This means that you can work with document.location as if it were a string in most cases: document.location = 'http://www.example.com' is a synonym of document.location.href = 'http://www.example.com'. If you assign another string to it, browser will load the website you assigned.

// To retrieve just the URL as a string, the read-only document.URL property can also be used.
