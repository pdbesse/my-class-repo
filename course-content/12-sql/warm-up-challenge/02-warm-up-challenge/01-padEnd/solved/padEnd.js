function padEnd(string, targetLength, padString) {
    padString = padString || " ";
    targetLength = targetLength || 0;

    let padding = "";
    let paddingLength = targetLength - string.length;
    while(padding.length + padString.length <= paddingLength) {
        padding += padString;
    }
    for (let i = 0; i < padString.length && padding.length < paddingLength; ++i) {
        padding += padString[i]; 
    }

    return string + padding;
}

console.log(padEnd('abc',10) === 'abc'.padEnd(10));          // "abc       "
console.log(padEnd('abc',10,"foo") === 'abc'.padEnd(10, "foo"));   // "abcfoofoof"
console.log(padEnd('abc',6,"123456") === 'abc'.padEnd(6, "123456")); // "abc123"
console.log(padEnd('abc',1) === 'abc'.padEnd(1));           // "abc"