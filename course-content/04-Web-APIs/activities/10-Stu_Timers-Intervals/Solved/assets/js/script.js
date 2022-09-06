//We first use getElementById() to select the HTML elements with "countdown" and "main" IDs.
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

//We then declare a message variable with a string of text. We then use the .split() method to split the string into individual elements in an array, words.
var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');
//['Some', 'say', 'the', 'world', 'will', 'end', 'in', '🔥,', 'Some', 'say', 'in', 'ice.', 'From', 'what', 'I’ve', 'tasted', 'of', 'desire,', 'I', 'hold', 'with', 'those', 'who', 'favor', 'fire.', 'But', 'if', 'it', 'had', 'to', 'perish', 'twice,', 'I', 'think', 'I', 'know', 'enough', 'of', 'hate.', 'To', 'say', 'that', 'for', 'destruction', 'ice,', 'Is', 'also', 'great,', 'And', 'would', 'suffice.']
//(51)

// Timer that counts down from 5
//We declare a countdown() function. Within our countdown() function, we declare a timeLeft variable and set it to 5.
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  //We then declare timeInterval and assign it the value of setInterval(). Here, we will update the text in timerEl at an interval of 1000 ms, or 1 second. With each interval, we decrement the value of timeLeft. If timeLeft is equal to 0, we use clearInterval() to stop timeInterval().
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    // timeLeft--;
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
//To briefly explain the displayMessage() function, we declare a variable called wordCount and set it to 0
function displayMessage() {
  var wordCount = 0;
  // for(var i = 0; i < words.length; i++){
  //   mainEl.textContent = words[i];
  // }

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    //We then declare a msgInterval variable and, as above, assign it the value of setInterval(). Within our callback, we check if our words array contains anything. If not, we clear the interval.
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
      mainEl.textContent = "DA DA DA!";
      //Otherwise, we update the textContent of mainEl with the string at words[wordCount]. With each interval, we increment wordCount. Each interval is set to the length of 1000 milliseconds.
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 500);
}

countdown();
