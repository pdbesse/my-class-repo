// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
   
  // [4,2,6,1] 
  // What is the below code doing? 
  //
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp ;
  // items[secondIndex] = items[firstIndex]
}
// Can you use the example array below to walk through the what 'swap' is doing to the input array? 
// swap([4,2,6,1], 0, 1);



// [4,2,6,1] 
// [4,2,6,1] 


function selectionSort(items) {

  var min;

  for (var i = 0; i < items.length; i++) {

    // set index of minimum to this position
    // What is `i` being used to track?
    //
    min = i;

    // check the rest of the array to see if anything is smaller
    for (var j = i + 1; j < items.length; j++) {
      // What occurs if a smaller value is discovered?
      //
      if (items[j] < items[min]) {
        min = j;//3
      }
    }

    // if the current position isn't the minimum, swap it and the minimum
    if (i !== min) {
      swap(items, i, min);
      // var temp = items[i];
      // items[i] = items[min];
      // items[min] = temp ;
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
