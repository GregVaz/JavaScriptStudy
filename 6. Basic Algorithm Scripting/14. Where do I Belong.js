/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  let sorted = true;
  let temp = 0;
  if(arr === []) {
    return 0;
  }
  while (sorted) {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i]>arr[i+1]) {
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = true;
      } else {
        sorted = false;
      }
    }
    console.log(arr); 
  }
  num = arr.findIndex(item => item >= num);
  if(num === -1) num = arr.length;
  return num;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
