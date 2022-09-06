function push(array,...rest) {
    // if array doesn't exist then do nothing
    // return the array length which is undefined
    if (!array) {
        return undefined;
    }

    var index = 0;
    // "push" all "rest" arguments onto the end of the array
    while (index < rest.length) {
        array[array.length] = arguments[index];
        index = index + 1;
    }

    // return the new array length
    return array.length;
}

let array = [1];
console.log(push(array,"hello", 23, 0.34) === 4, array);