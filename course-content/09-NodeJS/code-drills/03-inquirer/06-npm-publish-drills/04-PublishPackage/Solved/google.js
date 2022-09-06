// Once you've created your package.json, we can start writing our code for our search engine!

var opn = require("opn"); // BONUS #1

// Create a object named "Google" (ideally, we would want to create a Class, but let's stick to ES5 Javascript for now). 

var Google = {

    // Let's create a basic search function named "search" (search) that takes in two arguments, an array and a variable.
    search: function(arr, x){

        // Create a results object with two keys: positions (an empty array), and count (a number starting at 0).
        var results = {
            positions: [],
            count: 0,
            time: 0 // BONUS #2
        };

        
        var start = process.hrtime();

        // Search (hint: iterate) through the array and find all the instances of the variable. 
        for(var i = 0; i < arr.length; i++){
            // When you find the variable in the array, update the results object; push the current index to our "positions" array, and increment the "count" by one.
            if(arr[i] === x){
                results.positions.push(i);
                results.count++;
            }
        }

        // BONUS #2
        results.time = (parseFloat(process.hrtime(start)[0]) + parseFloat("." + process.hrtime(start)[1])).toFixed(2);

        // The function should return our results object.
        return results;
    },

    // BONUS #1
    searchOnline: function(str){
        opn(`https://www.google.com/search?q=${str}`);
    }
}

// Export your Google object

module.exports = Google;

// BONUSES: 

// 1. Create a second function called "searchOnline" (searchOnline) which takes in a string as a search query and opens a browser search for that query. Remember, we are running in nodejs.

// 2. In your results object, add a key for "time" that RETURNS the time it took, in seconds and rounded to two decimal places, for your search execution to run. This may be hard to find.


// Tests (uncomment these individually to test):

var google = Google;

// console.log(google.search([1, 2, 3, 4, 5, 6, 2, 9, 10, 11, 2], 2));
// { positions: [ 1, 6, 10 ], count: 3, time: '0.30' }

// console.log(google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america"));
// { positions: [ 0, 3, 4, 9 ], count: 4, time: '0.13' }

// google.searchOnline("James Harden Beard");
// Should open a browser search.