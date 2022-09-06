function reduceRight(array, callback, initialValue) {
    let accumulator = undefined;
    let index = undefined;

    if (initialValue) {
        accumulator = initialValue;
        index = array.length - 1;
    }
    else {
        if (array.length === 0) {
            throw TypeError;
        }

        accumulator = array[array.length - 1];
        index = array.length - 2;
    }
    
    while (index >= 0) {
        accumulator = callback(accumulator, array[index], index, array);    

        index = index - 1;
    }

    return accumulator;
}

console.log(reduceRight([0,1,2,4,8], (accumulator, currentValue) => { console.log(currentValue); return accumulator + currentValue; }) === 15);
console.log(reduceRight([0,1,2,4,8], (accumulator, currentValue) => { console.log(currentValue); return accumulator + currentValue; }, 1) === 16);
