console.log((process.argv));
var first = (process.argv[2]);
var second = (process.argv[3]);
var third = (process.argv[4]);
var result;

if(first === "add"){
    result = parseFloat(second) + parseFloat(third);
    console.log(result);
}
else if(first === "subtract"){
    result = parseFloat(second) - parseFloat(third);
    console.log(result);
}
else if(first === "multiply"){
    result = parseFloat(second) * parseFloat(third);
    console.log(result);
}
else if(first === "divide"){
    result = parseFloat(second) / parseFloat(third);
    console.log(result);
}
else if(first === "remainder"){
    result = parseFloat(second) % parseFloat(third);
    console.log(result);
}
else{
    result = "Not an appropriate operation";
    console.log(result);
}

// console.log(result);

