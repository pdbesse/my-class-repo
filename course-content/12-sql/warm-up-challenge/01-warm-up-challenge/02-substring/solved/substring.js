function substring(string, indexStart, indexEnd) {
    // if not present then indexEnd should be string.length
    indexEnd = indexEnd === undefined ? string.length : indexEnd;
    
    // if either End or Start are NaN then they should be set to 0
    indexEnd = indexEnd === NaN ? 0 : indexEnd;
    indexStart = indexStart === NaN ? 0 : indexStart;

    // if Start is greater than End then swap them
    if (indexStart > indexEnd) {
        let tmp = indexStart;
        indexStart = indexEnd;
        indexEnd = tmp;
    }

    // Make sure indices are within range.
    indexStart = indexStart < 0 ? 0 : indexStart;
    indexEnd = indexEnd > string.length ? string.length : indexEnd;

    let result = "";
    for (let i = indexStart; i < indexEnd; ++i) {
        result += string[i];
    }

    return result;
}

console.log(substring("Mozilla",1,3) === "oz");
console.log(substring("Mozilla",3,1) === "oz");
console.log(substring("Mozilla",-1,1) === "M");
