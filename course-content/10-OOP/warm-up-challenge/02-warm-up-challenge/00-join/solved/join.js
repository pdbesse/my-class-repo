function join(array,separator) {
    let result = "";

    if (array.length > 0) {
        result = result + array[0]+"";
    }

    let index = 1;
    while (index < array.length) {
        result += separator+""+array[index]

        index = index + 1;
    }

    return result;
}

console.log(join(["cat","dog","frog","snake"],",") === "cat,dog,frog,snake");
console.log(join(["A",200,"B",1.34],"%20")  === "A%20200%20B%201.34");
