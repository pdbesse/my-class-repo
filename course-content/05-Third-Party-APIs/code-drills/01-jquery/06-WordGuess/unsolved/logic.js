// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

// Create an Array of Word Options (all lowercase).

// create a varaible `chosenWord` equal to an empty string.
//Computer selected solution will be held here.


// Creat a variable `lettersInChosenWord` equal to an empty array
//This will break the solution into individual letters to be stored in array.

// create a variable `numBlanks` set to zero
// This will be the number of blanks we show based on the solution.


// create an array `blanksAndSuccesses` equal to an empty array
//Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').


// create a variable `wrongGuesses` equal to an empty array
//Holds all of the wrong guesses.


// create a variable `letterGuessed` equal to an empy string
//Holds the letters guessed


// Game counters
  // variable winCounter intially set to 0
  // variable lossCounter intially set to 0
  // variable numGuesses intially set to 0


// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
  //within the function startGame
    //reference variable numGuesses and assign it the value of 9
    // Reset the guesses back to 9.


    //reference variable chosenWord and assign it a new random word
    // Solution chosen randomly from wordList.

    //reference variable lettersInChosenWord and assign it the value of chosenWord split(). 
    // The word is broken into individual letters.
   
    //reference variable numBlanks and assign it the value of lettersInChosenWord.length;
    // We count the number of letters in the word.
  
  // CRITICAL LINE
  //reference variable blanksAndSuccesses and set it back to an empty array
  // Here we *reset* the guess and success array at each round.


  // CRITICAL LINE
  //reference variable wrongGuesses and set it back to an empty array
  // Here we *reset* the wrong guesses from the previous round.


  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.


  //locate/identify the DOM element with the ID `guesses-left`
  //update it with numGuesses;
  // Reprints the guessesLeft to 9.

  //locate/identify the DOM element with the ID `word-blanks`
  //update it with blanksAndSuccesses.join(" ");
  // Prints the blanks at the beginning of each round in the HTML.

  //locate/identify the DOM element with the ID `wrong-guesses`
  //update it with wrongGuesses.join(" ");;
  // Clears the wrong guesses from the previous round.
  

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.

  //create variable `letterInWord` and assign it a value of false
  // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.


  // Check if a letter exists inside the array at all.
  //iterate through the numBlanks array 
  //compare each element to the user letter
  //if letter is found then assign the boolean value of `true` to letter in word

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
 

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).

    // Loop through the word

      // Populate the blanksAndSuccesses with every instance of the letter.

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
   

  // If the letter doesn't exist at all...
 

    // Then we add the letter to the list of wrong letters.
  

    // We also subtract one of the guesses.

///Next Function

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.


  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.

  // This will print the array of guesses and blanks onto the page.

  // This will print the wrong guesses onto the page.

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...

    // Add to the win counter

    // Give the user an alert

    // Update the win counter in the HTML

    // Restart the game
    // call on the startGame() function

  // If we've run out of guesses (conditional)


    // Add to the loss counter


    // Give the user an alert "You lose"


    // Update the loss counter in the HTML
   

    // Restart the game
    // call on the startGame() function


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
// execute the startGame() function;

// Then initiates the function for capturing key clicks.
//document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  //event.key or String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  // checkLetters(letterGuessed);

  // Runs the code that ends each round.
  // roundComplete();

