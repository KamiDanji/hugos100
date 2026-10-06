// Challenge 058: Letter Hunt 🔎
// Read challenge.md first. No for, no while. The function IS the loop.

function countLetter(word, letter) {
  // ✏️ your code here
  if (word.length === 0) return 0;
  return (word[0] === letter ? 1 : 0) + countLetter(word.slice(1), letter);
}

// See it work: remove the // from the next line...
// console.log(countLetter("mississippi", "s"));
// ...then run: node challenges/058-letter-hunt/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { countLetter };
