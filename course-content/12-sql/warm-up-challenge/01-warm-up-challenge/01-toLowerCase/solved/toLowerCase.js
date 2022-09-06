function toLowerCase(string) {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";

    let result = "";
    for (let i = 0; i < string.length; ++i) {
        let replacement = string[i];

        // The search is constant time (ie. has no relation to the input length)
        for (let j = 0; j < upperCase.length; ++j) {
            if (string[i] === upperCase[j]) {
                replacement = lowerCase[j];
                // no need to continue searching for this character so break
                break;
            }
        }
        result += replacement;
    }

    return result;
}

function toLowerCase(string) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";

    // create an object for O(N) lookup
    var toLower = {};
    for (let i = 0; i < upperCase.length; ++i) {
        toLower[upperCase[i]]=lowerCase[i];
    }

    let result = "";
    for (let i = 0; i < string.length; ++i) {
        // if exists, replace with lower else use non-alpha string character (",",":",etc.)
        let replacement = toLower[string[i]] ? toLower[string[i]] : string[i];
        result += replacement;
    }
    return result;
}

console.log(toLowerCase("ABc?DEf:GH"));