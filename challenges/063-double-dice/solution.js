// Challenge 063: Double Dice 🎲
// Read challenge.md first.

function rollTwo() {
  // ✏️ your code here
  return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

// See it work: remove the // from the next line...
// console.log(rollTwo());
// ...then run: node challenges/063-double-dice/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { rollTwo };
