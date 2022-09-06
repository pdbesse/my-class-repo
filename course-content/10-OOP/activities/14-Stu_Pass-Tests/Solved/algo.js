function Algo() {}

Algo.prototype.reverse = function(str) {
  // return `str` with chained functions
  //'cat'
  return str
    // convert string to an array
    //['c','a','t']
    .split("")
    // reverse substrings in array
    //['t','a','c']
    .reverse()
    // convert array back into a string
    .join("");
   
    

};

Algo.prototype.isPalindrome = function(str) {
  // `reverse` is used as a helper function to check if `str` is a Palindrome
  return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
  // Convert 'str' into an array and use .map to execute a block of code on each word
  //"hello world"
  //["hello", "world"]
  return str.split(" ").map(word => {
    // For each word, we convert the first character to upper case
    //"hello"
    //'h' => 'H' + "ello"
    // 'w' => "W" + "orld"
    return word.substring(0, 1).toUpperCase() + word.substring(1);
    // ["Hello", "World"]
    // We convert the new array into a string.
  }).join(" ");//"Hello World"
};

module.exports = Algo;