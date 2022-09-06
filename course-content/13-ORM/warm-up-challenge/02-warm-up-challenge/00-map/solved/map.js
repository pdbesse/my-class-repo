function map(array, callback) {
    let result = [];

    let index = 0;
    while (index < array.length) {
        result[result.length] = callback(array[index],index,array);

        index = index + 1;
    }

    return result;
}

console.log(map([0,1,2,3,4],(currentValue) => { return currentValue % 2 === 0 ? "even" : "odd"; }));
