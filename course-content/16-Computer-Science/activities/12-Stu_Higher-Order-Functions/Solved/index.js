const grades = [56, 78, 99, 85];

// We receive the accumulator, currentValue, index, and the array from the reduce method.
function findAverage(accumulator /* 56 */, currentValue /* 78 */, index /* 1 */, array) {
  console.log(`accumulator ${accumulator}`);
  console.log(`currentValue ${currentValue}`);
  console.log(`index ${index}`);

  // Check to see if we are at the end of the given array.
  if (index === array.length - 1) {
    // Once we have reached the end of the array we divide by how many elements are in the given array.
    return (accumulator + currentValue) / array.length;
  }

  // Add the current value to our total.
  return accumulator + currentValue;
}

// Pass the 'findAverage' function into the reduce method.
let gradeAverage = grades.reduce(findAverage);

// log the 'gradeAverage' variable to see the result.
console.log(gradeAverage);

// accumulator 56
// currentValue 78
// index 1
// accumulator 134
// currentValue 99
// index 2
// accumulator 233
// currentValue 85
// index 3
// 79.5
