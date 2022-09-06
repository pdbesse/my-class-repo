// modified from https://gist.github.com/ttezel/3124434
var unsorted = [];
for (var index = 0, t = 40; index < t; index++) {
  unsorted.push(Math.round(Math.random() * t));
}


function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
// [33,5, 42]
  // get random pivot element (and remove from array to add back in later)
  var pivot = array.splice(Math.floor(Math.random() * array.length), 1);//

  // create left array (elements <= pivot), and right array (elements > pivot)
  var left = [];
  var right = [];

  // loop through array and create left/right
  array.forEach(function(el) {
    if (el <= pivot) {
      left.push(el);
    }
    else {
      right.push(el);
    }
  });

  // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
  // result of recursively sorting the right array (using quicksort).
  // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
  // 5 [33, 42]
  // 33 [42]
  // 42
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log("Pre Sort:", unsorted.join(" "));
var sorted = quickSort(unsorted);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");


var unSortedArr = [99, 100, 20, 33, 1000, 2, 18, 13, 21, 25, 28];


// randomPivot = 25;

//loop through EVERYTHING less than pivot to the left / greater than pivot to the right  Big O(n);
//var left = [20, 2, 18, 13, 21,];
//var right =[99,100, 33,1000, 28];                                            //||  [2,13,18,20,21, 25, 28,33,99,100, 1000]
                                                                               //||
//               V                    V          V                            //||        ^        ^       ^ 
                                                                               //||
//quickSort([20, 2, 18, 13, 21,]).concat(25, quickSort([99,100, 33,1000, 28])) //||  [2,13,18,20,21] 25 [28,33,99,100, 1000]
                                                                               //||
                                                                               //||
//                 V                               V                           //||     ^        ^          ^         ^ 
                                                                               //||     ^        ^          ^         ^ 
 // randomPivot = 18;               //||   randomPivot = 99;                   //||     ^        ^          ^         ^ 
                                    //||                                       //||     ^        ^          ^         ^      
//var left = [2,13];                //||   var left = [33,28];                 //||     ^        ^          ^         ^    
//var right =[20,21];               //||   var right =[100,1000];              //||     ^        ^          ^         ^ 
                                                                               //||     ^        ^          ^         ^  
//    V   V   V                              V   V   V                         //||     ^        ^     | [28, 33] 99 [100, 1000]
                        //quickSort([33,28]).concat(99, quickSort([100,1000])) //||     ^        ^     |  
//                                                                             //||     ^        ^     |  
//quickSort([2,13]).concat(18, quickSort([20,21]))   V   V   V                 //||  [2, 13] 18 [20, 21] |
//           V                     V  


//quickSort([2]).concat(13, quickSort([])) //quickSort([28]).concat(33, quickSort([]))
//base case reached shortly. 


