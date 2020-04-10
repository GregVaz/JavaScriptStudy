/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    let minimos = [];
    let primo = 2;
    let mcm = true;
    const arrSort = arr.sort( (a,b) => a-b);
    for (let i = arrSort[0]; i <= arrSort[1]; i++) {
      let temp = [];
      let ntemp = i;
      if (i === 1) {
        minimos.push([1]);
        continue;
      }
      while(mcm) {
        if ( ntemp % primo === 0) {
          temp.push(primo);
          ntemp = ntemp / primo;
        } else {
          primo = nextPrime(primo);
        }
        if (ntemp === 1) {
          mcm = false;
        }
      }
      minimos.push(temp);
      temp = [];
      primo = 2;
      mcm = true;
    }  
    console.log(minimos);
    return comparative(minimos).reduce( (sum, x) =>  sum * x);
  }
  
  function comparative(arr) {
    let temp = [];
    while (arr.length !== 0) {
      let value = arr.shift();
      for (let i of value) {
        for(let e of arr) {
          if (e.findIndex(elem => elem === i) !== -1){
            e.splice(e.findIndex(elem => elem === i), 1);
            continue;
          }
        }
        temp.push(i);
      }
    }
    return temp;
  }
  
  function esPrimo(num) {
      let prueba = [];
      if (num==2) {
          prueba.push(false);
      }
      for (let i = 2; i <= Math.ceil(num/2); i++) {
          if (num % i !== 0) {
          prueba.push(false);
          } else {
          prueba.push(true);
          }
      }
      return prueba.every( x => x === false ) ? num : undefined;
  }
  
  function nextPrime(n) {
    if (esPrimo(++n) === undefined) {
      return nextPrime(n++);
    } else {
      return n;
    }
  }
  
  console.log(smallestCommons([1,5]));
  