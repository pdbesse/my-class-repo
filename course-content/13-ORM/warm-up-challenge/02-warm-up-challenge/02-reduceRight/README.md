# reduceRight

Develop a function reduceRight(array, callback(accumulator[, currentValue[, index[ ,array]]]), initialValue)

so that:

If initialValue is provided then callback is called on array elements array.length-1 ... 0 and the initial
accumulator argument to the callback is the initialValue.

If initialValue is not provided then callback is called on array elements array.length-1..1 and the initial
accumulator argument to the callback is array[array.length-1].  NOTE:  If initialValue is not provided and array is empty then throw TypeError.  You don't need to implement this but it's closer to correct behavior for the function.

The return value of the callback for each element is the accumulator for the next call.

The return value of reduce is the final value of accumulator.

The Big O for the implementation should be O(N).

# Test Case(s)

`Input 1` - [0,1,2,4,8]
`Input 2` - (accumulator, currentValue) => { console.log(currentValue); return accumulator + currentValue; }
`Output return` - 15
`Output console` - 8, 4, 2, 1, 0

`Input 1` - [0,1,2,4,8]
`Input 2` - (accumulator, currentValue) => { console.log(currentValue); return accumulator + currentValue; }
`Input 3` - 1
`Output return` - 16
`Output console` - 8, 4, 2, 1, 0

