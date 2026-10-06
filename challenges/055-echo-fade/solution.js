// Challenge 055: Echo Fade 📢
// Read challenge.md first. No for, no while.

function fade(word) {
  // ✏️ your code here
  if (word.length <= 1) return word;
  return `${word} ${fade(word.slice(1))}`;
}

// See it work: remove the // from the next line...
// console.log(fade("hey"));
// ...then run: node challenges/055-echo-fade/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { fade };
