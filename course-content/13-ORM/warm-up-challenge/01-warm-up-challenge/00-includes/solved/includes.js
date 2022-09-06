function includes(array, element) {
    let index = 0;
    
    while(index < array.length) {
        if (array[index] === element) {
            return true;
        }
        index = index + 1;
    }
    return false;
}

console.log(includes(["cat","dog","frog","snake"],"cat") === true);
console.log(includes(["cat","dog","frog","snake"],"snake") === true);
console.log(includes(["cat","dog","frog","snake"],"pancake") === false);
