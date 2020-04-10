/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (abc.every((value, index) => value === str.charAt(index))) {
    return undefined;
  }
  for (let i=0; i<str.length; i++) {
    if (Array.from(str)[i] !== abc[i + abc.indexOf(str.charAt(0))]) {
      str = abc[i + abc.indexOf(str.charAt(0))];
      break;
    }
  }
  return str;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");