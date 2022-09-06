# some 

Develop a function some(array, callback(element[, index[, array]])) where callback is called on
each element of the array and if any call returns a truthy value, the function returns true else
it returns false;

The Big O for the implementation should be O(N).

# Test Case(s)

`Input 1` - [0,1,2,3]
`Input 2` - function callback(element,index,array) { return element < 4; }
`Output` - true

`Input 1` - [0,1,2,3]
`Input 2` - function callback(element,index,array) { return element === 0; }
`Output` - true

`Input 1` - [0,1,2,3]
`Input 2` - function callback(element,index,array) { return index < 4; }
`Output` - true

`Input 1` - [0,1,2,3]
`Input 2` - function callback(element,index,array) { return index === 0; }
`Output` - true

`Input 1` - [0,1,2,3]
`Input 2` - function callback(element,index,array) { return element === 4; }
`Output` - false
