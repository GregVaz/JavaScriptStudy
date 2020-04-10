/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(n) {
    let arr = [0, 1];
    if (n === 1) {
      return 1;
    }
    for (let i = 2; i < n + 1; i++){
      const fib = arr[i - 2] + arr[i - 1];
      if(n < fib) {
        break;
      }
      arr.push(fib);
    }
   return arr.filter(x => x%2!==0).reduce( (sum,x) =>  sum + x);
  }
  
  sumFibs(10);
  