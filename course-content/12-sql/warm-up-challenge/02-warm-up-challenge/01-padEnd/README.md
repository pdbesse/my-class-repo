# padEnd

Develop a function padEnd(string, targetLength[, padString]) that appends a repeated padString
up to the targetLength.

If padstring is undefined, then padString used is a single space " ".

If targetLength is less than string length, then return string.

# Test Case(s)

`Argument 1` - "abc"
`Argument 2` - 10
`Return Value` - "abc       "

`Argument 1` - "abc"
`Argument 2` - 10
`Argument 3` - "foo"
`Return Value` - "abcfoofoof"

`Argument 1` - "abc"
`Argument 2` - 6
`Argument 3` - "123456"
`Return Value` - "abc123"

`Argument 1` - "abc"
`Argument 2` - 1
`Return Value` - "abc"
