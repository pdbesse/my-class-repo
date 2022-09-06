function fill(array, value, start, end) {
    let strt = start || 0;
    let nd = end || array.length;

    if (strt < 0) {
        strt = strt + array.length;
    }
    if (nd < 0) {
        nd = nd + array.length;
    }

    while(strt < nd && strt < array.length) {
        array[strt] = value;

        strt = strt + 1;
    }

    return array;
}

console.log(fill([0,1,2,3,4], 5));
console.log(fill([0,1,2,3,4], 5, 1));
console.log(fill([0,1,2,3,4], 5, -4));
console.log(fill([0,1,2,3,4], 5, 0, 1));
console.log(fill([0,1,2,3,4], 5, -5, -4));


