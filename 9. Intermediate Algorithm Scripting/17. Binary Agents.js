/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    let letters = str.split(' ');
    let temp = [];
    let e = 7;
    letters.forEach(value => {
      temp.push(value.split('').reduce( (sum, l) =>  parseInt(sum) + l*(2**--e)));
      e = 7;
    });
    str = '';
    for(let i of temp) {
      str = str + String.fromCharCode(i);
    }
    return str;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  