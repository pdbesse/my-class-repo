function checkPrime(num) {
  for (var i = 2; i <= num / i; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num !== 1;
}

function primeFactors(num) {
  var factors = [];
  for (var i = 2; i <= num; i++) {
    if (num % i === 0 && checkPrime(i)) {
      factors.push(i);
    }
  }
  return factors;
}

var result = primeFactors(33);
console.log(result);