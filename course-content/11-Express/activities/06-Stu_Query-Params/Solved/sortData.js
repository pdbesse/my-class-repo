// Helper function to sort data based on key and type
// https://www.w3schools.com/jsref/jsref_sort.asp
// Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}
// When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
//'name', 'relevance'
const sortData = (firstKey, secondKey, type) => {
  switch (type) {
    // 'dsc' by name 'dsc', relevance 'asc'
    case 'asc': {
      //a and b are objects in our array
      return (a, b) => {
        if (a[firstKey] > b[firstKey]) {
          // a comes before b
          return -1;
        }
        if (a[firstKey] < b[firstKey]) {
          // b comes before a
          return 1;
        }
        //if only if a[firstKey] and b[firstKey] are equal
        if (a[secondKey] > b[secondKey]) {
          return 1;
        }
        if (a[secondKey] < b[secondKey]) {
          return -1;
        }
        return 0;
      };
    }
    case 'dsc': {
      // 'asc' by name 'asc', relevance 'dsc'
      return (a, b) => {
        // b comes before a
        if (a[firstKey] < b[firstKey]) {
          return -1;
        }
        if (a[firstKey] > b[firstKey]) {
          return 1;
        }

        if (a[secondKey] < b[secondKey]) {
          return 1;
        }
        if (a[secondKey] > b[secondKey]) {
          return -1;
        }
        return 0;
      };
    }
    default:
      return undefined;
  }
};
exports.sortData = sortData;
