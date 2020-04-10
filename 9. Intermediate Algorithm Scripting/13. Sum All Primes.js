/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    let primos = [];

    if(num === 1) {
        return 1;
    }

    for (let i = 2; i <= num; i++) {
        const result = esPrimo(i);
        if(result !== undefined) {
        primos.push(result);
        }
    }

    return primos.reduce( (sum, x) => sum + x);
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
  
console.log(sumPrimes(977));
