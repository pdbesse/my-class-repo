function endsWith(string, endsWith, length) {
    length = length || string.length;

    for (let i = 0; i < endsWith.length; ++i) {
        if (string[length-i-1] !== endsWith[endsWith.length-i-1]) {
            return false;
        }
    }

    return true;
}

console.log(endsWith("Hello?","?") === "Hello?".endsWith("?"));
console.log(endsWith("Hello?","o") === "Hello?".endsWith("o"));
console.log(endsWith("Hello?","o",5) === "Hello?".endsWith("o",5));
