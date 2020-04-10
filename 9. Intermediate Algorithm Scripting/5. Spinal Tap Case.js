/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

TEST
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
Passed
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/



function spinalCase(str) {
    let arr = [];
    str.split(/\W|_/).forEach( value => {
      if(/^\w{1}[a-z]+[A-Z]{1}\w+/.test(value)) {
        let rept = [...value.split(/[A-Z]/)].filter( x => x !== '');
        let subindex = 0;
        for (let i = 0; i < rept.length; i++) {
          let index = value.substring(1, value.length).search(/[A-Z]/);
          if (index === -1) {
            index = value.length - 1;
          }
          arr.push(value.substring(subindex, index+1).toLowerCase());
          value = value.substring(index+1, value.length);
        }
      } else {
        arr.push(value.toLowerCase());
      }
    });
    console.log(arr);
    return arr.join('-');
  }
  
  spinalCase('This Is Spinal Tap');