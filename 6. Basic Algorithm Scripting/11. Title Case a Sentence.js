/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    const w = str.split(' ');
    let newStr = '';
    for(let i in w){
      newStr += w[i].substring(0,1).toUpperCase() + w[i].substring(1,).toLowerCase() + ' ';
    }
    return newStr.substring(0,newStr.length-1);
  }
  
  titleCase("I'm a little tea pot");
  

//otra forma

function titleCase(str) {
    let band = true;
    let newStr = '';
    for(let i in str){
      if(band){
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
      if(str[i] === ' '){
        band = true;
      } else {
        band = false;
      }
    }
    return newStr;
  }
  
  titleCase("sHoRt AnD sToUt");