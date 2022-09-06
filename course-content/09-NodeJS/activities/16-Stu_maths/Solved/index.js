const maths = require('./maths');

// console.log("process.argv", process.argv);

const operation = process.argv[2];

const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

switch(operation){
    case "+":
    case "sum":
        totalNum = maths.sum(numOne, numTwo)
        console.log(totalNum);
        break;
    case "-":
    case "difference":
        totalNum = maths.difference(numOne, numTwo)
        console.log(totalNum);
        break;
    case "*":
    case "product":
        totalNum = maths.product(numOne, numTwo)
        console.log(totalNum);
        break;
    case "/":
    case "quotient":
        totalNum = maths.quotient(numOne, numTwo)
        console.log(totalNum);
        break;
    default:
        console.log("Meow - That is not a valid operation");
        break;               
}