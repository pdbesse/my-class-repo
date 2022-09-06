function startsWith(string, startsWith, length) {
    length = length || string.length;

    for (let i = 0; i < startsWith.length; ++i) {
        if (string[i] !== startsWith[i]) {
            return false;
        }
    }

    return true;
}

console.log(startsWith("Hello?","H") === true);
console.log(startsWith("Hello?","e") === false);
