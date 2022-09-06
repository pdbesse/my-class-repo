# substring

Develop a function substring(startIndex[, endIndex]) that returns the range of characters
in string starting at startIndex up to but not including endIndex.

If endIndex is undefined then the return value includes all characters from startIndex to the
end of the string.

If startIndex is greater than endIndex then the function behaves as if the two were swapped.

If startIndex or endIndex is less than zero then the function should treat the value as zero.

If startIndex or endIndex is greater than or equal to string length then the function should
treat the value as string length.

# Test Case(s)

`Argument 1` - "Mozilla"
`Argument 2` - 1
`Argument 3` - 3 
`Return Value` - "oz"

`Argument 1` - "Mozilla"
`Argument 2` - 3
`Argument 3` - 1 
`Return Value` - "oz"

`Argument 1` - "Mozilla"
`Argument 2` - 1
`Argument 3` - -1 
`Return Value` - "M"

