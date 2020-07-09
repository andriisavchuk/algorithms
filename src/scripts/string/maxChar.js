/* eslint-disable no-restricted-syntax,no-unused-vars,no-continue,no-console,consistent-return,no-plusplus */

/*
  Given a string, return the character that is most commonly used in the string

  Examples:
   maxChar("abccccccba") === "c"
   maxChar("abg 12311111111") === "1"
*/

function maxCharacter(str) {
  const chars = {}
  let maxValue = 0
  let maxChar = ''

  for (const char of str) {
    if (!chars[char]) {
      chars[char] = 1
    } else {
      chars[char]++
    }
  }

  for (const char in chars) {
    if (chars[char] > maxValue) {
      maxValue = chars[char]
      maxChar = char
    }
  }

  return maxChar
}

const result = maxCharacter('abccbaffxccsssfxffgf')
console.log(`Maximum chars in string have ${result}`)

/*
// is question about proper work of this solution
function maxChar(str) {
  let max = 0,
    maxValue = '';

  str.split('').forEach(function(char){
    if(str.split(char).length > max) {
      debugger;
      max = str.split(char).length;
      maxValue = char;
    }
  });
  return maxValue;
}

const result = maxChar("abccbaffxccsssfxffgf");
console.log(`Maximum chars in string have ${result}`);
*/