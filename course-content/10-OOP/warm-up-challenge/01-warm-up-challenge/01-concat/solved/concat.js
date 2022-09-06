function concat() {
    let result = "";
    
    for (let i = 0; i < arguments.length; ++i) {
        result = result + arguments[i];
    }

    return result;
}

console.log(concat("A","BC","DEF") === "A".concat("BC","DEF"));
console.log(concat("") === "".concat());
