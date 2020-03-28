    /*
    Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
    */

   function repeatStringNumTimes(str, num) {
    let temp = '';
    while(num>0){
      temp += str;
      num--;
    }
    console.log(temp);
    return temp;
  }
  
  repeatStringNumTimes("abc", 3);
  