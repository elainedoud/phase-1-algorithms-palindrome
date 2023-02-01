function isPalindrome(word) {
  const word_array = word.split('');
  let word_array_length = word_array.length;
  let x = (word_array_length - 1)
  if (word_array[0] !== word_array[x]){
    return false;
  }
  if (word_array[1] !== word_array[(x-1)]){
    return false;
  }
  if (word_array[2] !== word_array[(x-2)]) {
    return false;
  }
  if (word_array[3] !== word_array[(x-3)]){
    return false;
  }
  if (word_array[4] !== word_array[(x-4)]){
    return false;
  }
  if (word_array[5] !== word_array[(x-5)]){
    return false;
  }
  else {
    return true;
  }
}


/* 
  Add your pseudocode here.
  - I want to make the string into an array. (Done)
  - I want to iterate through the array.
  - I made the incorrect assumption that a palindrome must be an even
  - amount of characters; this is incorrect - it must just be the same forward
  - and backwards
  - Use this number of letters to iterate through the array
  - Have a way to compare first letter with last letter
  For example, if const x = word
  x[0] === x[5]
  x[1] === x[4]
  x[2] === x[3]
  - console log along the way to see if it works
  - So far it is working, but I have not yet detemrined how to properly
  iterate over the entire array

  - Make it as an if, elsif, elsif, else statement, so if first and last
  letter do not match, it will return as false immediately
    /*console.log(word_array)
  console.log(word_array_length)
  console.log(x)
  console.log(word_array[0]) 
  console.log(word_array[1])
  console.log(word_array[2])
  console.log(word_array[3])
  console.log(word_array[4])
  console.log(word_array[5])*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abbbba"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("pencil"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
