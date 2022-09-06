const numbers = [2, 4, 6, 8];
let squared;
let squaredNums = undefined;
console.log(squared);
if (numbers.length > 0) {
  squaredNums = numbers.map((num) => {
    return num ** 2;
  });
}

console.log(squaredNums);
