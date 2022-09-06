# padStart

Develop a function padStart(string, targetLength[, padString]) that prepends a repeated padString
up to the targetLength.

If padstring is undefined, then padString used is a single space " ".

If targetLength is less than string length, then return string.

# Test Case(s)

`Argument 1` - "abc"
`Argument 2` - 10
`Return Value` - "       abc"

`Argument 1` - "abc"
`Argument 2` - 10
`Argument 3` - "foo"
`Return Value` - "foofoofabc"

`Argument 1` - "abc"
`Argument 2` - 6
`Argument 3` - "123456"
`Return Value` - "123abc"

`Argument 1` - "abc"
`Argument 2` - 1
`Return Value` - "abc"
