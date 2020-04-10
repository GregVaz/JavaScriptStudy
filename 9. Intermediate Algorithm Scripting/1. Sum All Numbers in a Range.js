/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

// Version iperativa
function sumAll(arr) {
    let l = 0;
    arr = arr.sort( (a,b) => {
      return a - b
    });
    
    for (let i = arr[0]; i <= arr[1]; i++) {
      l += i;
    }
    return l;
  }
  
  console.log(sumAll([5,10]));

// Version si no hubiera limite inferior
function sumAll(arr) {
  return [...Array( (arr[0] > arr[1] ? arr[0] : arr[1]) + 1).keys()].reduce( (acum, x) => acum + x);
}

console.log(sumAll([5, 10]));

// Version con formula matematica
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};