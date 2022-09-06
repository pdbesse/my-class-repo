function reduce(array, callback, initialValue) {
    let accumulator = undefined;
    let index = undefined;

    if (initialValue) {
        accumulator = initialValue;
        index = 0;
    }
    else {
        if (array.length === 0) {
            throw TypeError;
        }

        accumulator = array[0];
        index = 1;
    }
    
    while (index < array.length) {
        accumulator = callback(accumulator, array[index], index, array);    

        index = index + 1;
    }

    return accumulator;
}

console.log(reduce([0,1,2,4,8], (accumulator, currentValue) => { return accumulator + currentValue; }) == 15);
console.log(reduce([0,1,2,4,8], (accumulator, currentValue) => { return accumulator + currentValue; }, 1) === 16);
