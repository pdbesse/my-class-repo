function toLowerCase(string) {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";

    let result = "";
    for (let i = 0; i < string.length; ++i) {
        let replacement = string[i];
        for (let j = 0; j < lowerCase.length; ++j) {
            if (string[i] === lowerCase[j]) {
                replacement = upperCase[j];
                // no need to continue searching for this character so break
                break;
            }
        }
        result += replacement;
    }

    return result;
}

console.log(toLowerCase("ABcDEfGH"));