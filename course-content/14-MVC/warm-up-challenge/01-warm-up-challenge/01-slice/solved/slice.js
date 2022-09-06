function slice(array, begin, end) {
    let result = [];
    
    begin = begin || 0;
    end = end || array.length;

    if (begin < 0) {
        begin = begin + array.length;
    }

    if (end < 0) {
        end = end + array.length;
    }

    while(begin < end) {
        result[result.length] = array[begin];

        begin = begin + 1;
    }

    return result;
}

console.log(JSON.stringify(slice([1,2,3],1,2)) === "[2]"); // [2]
console.log(JSON.stringify(slice([1,2,3],0,2)) === "[1,2]"); // [2]
console.log(JSON.stringify(slice([1,2,3],2)) === "[3]"); // [2]
console.log(JSON.stringify(slice([1,2,3],-2,-1)) === "[2]"); // [2]
console.log(JSON.stringify(slice([1,2,3],-3,-1)) === "[1,2]"); // [2]
console.log(JSON.stringify(slice([1,2,3],-1)) === "[3]"); // [2]
