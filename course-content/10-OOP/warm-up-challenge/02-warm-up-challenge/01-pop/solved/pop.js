function pop(array) {
    // if no array do nothing
    if (!array) {
        return undefined;
    }

    if (array.length === 0) {
        return undefined;
    }

    let element = array[array.length-1];
    array.length = array.length - 1;

    return element;
}

let array = [1,2,3];
console.log(pop(array) === 3, array);
array = [];
console.log(pop(array) === undefined, array);
