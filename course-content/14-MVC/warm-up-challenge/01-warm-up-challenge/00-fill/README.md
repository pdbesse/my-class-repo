# fill(array, value, start, end)

Develop a function fill where array is populated with value from index start up to but
not including index end.

The indices start and end can be negative.  Negative values indicate a position from the
end of the array. (ie. -1 is index array.length - 1)

The Big O for the implementation should be O(N)

# Test Case(s)

`Input 1` - [0,1,2,3,4]
`Input 2` - 5
`Output` - [5,5,5,5,5]

`Input 1` - [0,1,2,3,4]
`Input 2` - 5
`Input 3` - 1
`Output` - [0,5,5,5,5]

`Input 1` - [0,1,2,3,4]
`Input 2` - 5
`Input 3` - -4
`Output` - [0,5,5,5,5]

`Input 1` - [0,1,2,3,4]
`Input 2` - 5
`Input 3` - 0
`Input 4` - 1
`Output` - [5,1,2,3,4]

`Input 1` - [0,1,2,3,4]
`Input 2` - 5
`Input 3` - -5
`Input 4` - -4
`Output` - [5,1,2,3,4]

