// Immediately export a function that generates a string of random numbers and letters
// Numbers that begin with 0x are interpreted as hexadecimal (base 16) in C. 
// 0x10000 == 65536 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#parameters
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
