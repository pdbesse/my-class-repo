// Sort prime numbers : SOLUTION
// =======================
function primeSort(arr) {
  // iterate through the argument and store all the primes in
  // a new array
  var primes = [];
  for (var i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }

  // use the `sort` method to sort our prime array in descending
  // order and then return it.
  return primes.sort(function (num1, num2) { return num2 - num1 })
}

function checkPrime(num) {
  for (var i = 2; i <= num/i; i++){
    if (num % i === 0) {
      return false
    }
  }
  return true;
}



console.log(primeSort([83, 6, 13, 15, 27, 19, 103, 59, 42, 4]));















