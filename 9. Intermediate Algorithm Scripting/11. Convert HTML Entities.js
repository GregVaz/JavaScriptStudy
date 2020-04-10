/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

TEST
convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
Passed
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
Passed
convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
Passed
convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
Passed
convertHTML("Schindler's List") should return Schindler&apos;s List.
*/

function convertHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, "&quot;").replace(/\'/g, '&apos;');
  }
  
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  