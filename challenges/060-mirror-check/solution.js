// Challenge 060: Mirror Check 🚓
// Read challenge.md first. No for, no while.

function isPalindrome(word) {
  // ✏️ your code here
  if (word.length <= 1) return true;
  if (word[0] !== word[word.length - 1]) return false;
  return isPalindrome(word.slice(1, -1));
}

// See it work: remove the // from the next line...
// console.log(isPalindrome("kayak"));
// ...then run: node challenges/060-mirror-check/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { isPalindrome };
