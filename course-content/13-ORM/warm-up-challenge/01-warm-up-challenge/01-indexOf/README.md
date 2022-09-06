# indexOf

Develop a function indexOf(array, element[, startIndex]) that returns the index of the element in the array if found else it returns -1.  The search starts from startIndex if specified else 0 and proceeds
from the lowest index to the highest index (array.length - 1).  If the startIndex is negative, the start position is relative to the end of the array. (ie. a startIndex of -1 specifies index array.length - 1). 

If startIndex is less than negative array.length then the function will search the entire array.

If the startIndex is greater than or equal to array.length then return -1.   

The Big O for the implementation should be O(N).

# Test Case(s)

`Input 1` - ["cat","snake","snake","cat"]
`Input 2` - "snake"
`Output return` - 1

`Input 1` - ["cat","snake","snake","cat"]
`Input 2` - "snake"
`Input 3` - 2
`Output return` - 2

`Input 1` - ["cat","snake","snake","cat"]
`Input 2` - "snake"
`Input 3` - 3
`Output return` - -1

`Input 1` - ["cat","snake","snake","cat"]
`Input 2` - "snake"
`Input 3` - -3
`Output return` - 1

`Input 1` - ["cat","snake","snake","cat"]
`Input 2` - "snake"
`Input 3` - -4
`Output return` - 1

`Input 1` - ["cat","dog","frog","snake"]
`Input 2` - "pancake"
`Output return` - -1

`Input 1` - ["cat","dog","frog","snake"]
`Input 2` - "cat"
`Input 3` - -5
`Output return` - -1

