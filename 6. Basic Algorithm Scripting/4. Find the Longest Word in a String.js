/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let max = 0;
    const words = str.split(' ');
    for(let st in words){
      if(words[st].length > max) {
        max = words[st].length
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  