function indexOf(array, element, startIndex) {
    let index = startIndex || 0;
    
    if (index < 0) {
        index = array.length + index;
    }

    // for indexOf if index is negative and out of bounds then
    // set it to 0 (search all).
    if (index < 0) {
        index = 0;
    }
    
    // if calculated index >= array.length then skip loop body and return -1
    // else search
    while(index < array.length) {
        if (array[index] === element) {
            return index;
        }
        index = index + 1;
    }
    
    return -1;
}

console.log(indexOf(["cat","dog","frog","snake"],"cat") === 0);
console.log(indexOf(["cat","dog","frog","snake"],"snake") === 3);
console.log(indexOf(["cat","dog","frog","snake"],"pancake") === -1);
