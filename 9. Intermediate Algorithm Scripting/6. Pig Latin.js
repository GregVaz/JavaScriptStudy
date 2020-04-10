/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

TEST
translatePigLatin("california") should return "aliforniacay".
Passed
translatePigLatin("paragraphs") should return "aragraphspay".
Passed
translatePigLatin("glove") should return "oveglay".
Passed
translatePigLatin("algorithm") should return "algorithmway".
Passed
translatePigLatin("eight") should return "eightway".
Passed
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Passed
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/

function translatePigLatin(str) {
    if (/[aeiou]/.test(str.charAt(0))) {
      str = new String('').concat(str,"way");
    } else if (str.search(/[aeiou]/) === -1) {
      str = ''.concat(str, "ay");
    } else {
      while(!/[aeiou]/.test(str.charAt(0))) {
        str = new String(''.concat(str,str.charAt(0)));
        str = str.substring(1, str.length);
      }
      str = ''.concat(str, "ay");
    }
    return str;
  }
  
  translatePigLatin("rhythm");