# map

Develop a function map(array, callback(currentValue[, index[, array]])) that creates a new array
populated by the return values of callback applied to each value of array.

The Big O for the implementation should be O(N).

# Test Case(s)

`Input 1` - [0,1,2,3,4]
`Input 2` - (currentValue) => { return currentValue % 2 === 0 ? "even" : "odd"; }
`Output return` - ["even","odd","even","odd","even"]

