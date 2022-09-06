function charAt(string, index) {
    // is Numeric
    if (typeof index !== 'number' || !isFinite(index)) { 
        index = 0;
    }
    
    if (index < 0 || index >= string.length) {
        return "";
    }

    return string[index];
}

console.log(charAt("Hello World!",0) === "Hello World!".charAt(0));
console.log(charAt("Hello World!",-1) === "Hello World!".charAt(-1));
console.log(charAt("Hello World!",11) === "Hello World!".charAt(11));
console.log(charAt("Hello World!",12) === "Hello World!".charAt(12));
