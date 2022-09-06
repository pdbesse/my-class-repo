//The Fibonacci numbers are a sequence of integers in which every number after the first two, 
// 0 and 1, is the sum of the two preceding numbers. 
// The `position` parameter is what position in the Fibonacci sequence we want to find the value of
// O(2^n)
const fibonacci = (position) => {
  // Since this implementation of the algorithm excludes searching for negative positions, we check
  // if the value of `position` is less than two.
  // If the value of `position` is 1, return 1 because it's the value at that position of the sequence.
  // If the value of `position` is 0, return 0 because it's the value at that position of the sequence.
  // base/termating condition
  if (position < 2) {
    return position;
  }
  // The current value at this position is evaluated by adding the sum of the values at the two
  // preceding positions of the sequence
  // By calling itself, we form a loop.
  // With each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// This will return the value of the Fibonacci sequence at the ninth position
console.log(fibonacci(5));



//                                 fibonacci(5) => 5
//                                      /\ ^ 3 + 2
//               fibonacci(4) ^3        +                        fibonacci(3) ^ 2
//                   /\                                                /\ 
//     fibonacci(3) +     ^ 3         Fibonacci(2)               fibonacci(2) = 1 +   fibonacci(1) = 1
//          /\     ^2                     /\       ^ 1                         /\ ^ 1                
// fibonacci(2) = 1 + fibonacci(1) = 1|  fibonacci(1) +  fibonacci(0) | fibonacci(1)  fibonacci(0) | 

//     /\  ^ 1 + 0
// fibonacci(1) + fibonacci(0) |




//memoized fibonacci sequence:
//A memoized recursive algorithm maintains an entry in 'memo'/obj for the solution to each of subproblem, Each 'memo'/obj entry initially contains a special value to indicate that entry has yet to be solved. 
//When the subproblem is first encountered, its solution is computed and stored in the 'memo'/obj.
//O(n)
function fibonnaciMemo(position, memo={}) {
    if (position < 2) {
        return position;
    }
    if (memo[position]) {
        return memo[position];
    }
    memo[position] = fibonnaciMemo(n-1, memo) + fibonnaciMemo(n-2, memo); 
    return memo[position];
};

console.log(fibonnaciMemo(5));


//                                 fibonacci(5) => 5
//                                      /\ ^ 3 + 2
//               fibonacci(4) ^3        +                        
//                   /\                                                
//     fibonacci(3) +     ^ 3         Fibonacci(2)               
//          /\     ^2                                  
// fibonacci(2) = 1 + fibonacci(1) = 1|  

//     /\  ^ 1 + 0
// fibonacci(1) + fibonacci(0) |




