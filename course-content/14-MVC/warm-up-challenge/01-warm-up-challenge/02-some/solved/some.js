function some(array, callback) {
    let index = 0;
    
    // for all elements in array
    while (index < array.length) {
        // execute the callback and if any are true
        // return true
        if (callback(array[index], index, array)) {
            return true;
        }
        index = index + 1;
    }
    // else return false
    return false;
}
