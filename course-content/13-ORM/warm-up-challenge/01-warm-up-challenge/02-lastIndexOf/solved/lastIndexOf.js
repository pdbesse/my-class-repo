function lastIndexOf(array, element, fromIndex) {
    let index = fromIndex || array.length - 1;

    if (index < 0) {
        index = array.length + index; 
    }

    // for lastIndexOf if positive index is out of bounds then
    // set it to end of array (search all).
    if (index >= array.length) {
        index = array.length - 1;
    }

    // if calculated index < 0 then skip loop body and return -1
    // else search
    while(index >= 0) {
        if (array[index] === element) {
            return index;
        }
        index = index - 1;
    }
    
    return -1;
}

console.log(lastIndexOf(["cat","snake","snake","cat"],"cat") === 3);
console.log(lastIndexOf(["cat","snake","snake","cat"],"cat",100) === 3);
console.log(lastIndexOf(["cat","snake","snake","cat"],"cat",2) === 0);
console.log(lastIndexOf(["cat","snake","snake","cat"],"snake") === 2);
console.log(lastIndexOf(["cat","dog","frog","snake"],"pancake") === -1);
console.log(lastIndexOf(["cat","dog","frog","snake"],"frog",1) === -1);
