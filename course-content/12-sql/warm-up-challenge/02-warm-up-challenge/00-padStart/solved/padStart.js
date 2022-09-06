function padStart(string, targetLength, padString) {
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

    return padding + string;
}

console.log(padStart('abc',10) === 'abc'.padStart(10));          // "       abc"
console.log(padStart('abc',10,"foo") === 'abc'.padStart(10, "foo"));   // "foofoofabc"
console.log(padStart('abc',6,"123456") === 'abc'.padStart(6, "123456")); // "123abc"
console.log(padStart('abc',1) === 'abc'.padStart(1));           // "abc"