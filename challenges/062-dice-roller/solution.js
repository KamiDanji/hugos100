// Challenge 062: Dice Roller 🎲
// Read challenge.md first.

function rollDie() {
  // ✏️ your code here
  return Math.floor(Math.random() * 6) + 1;
}

// See it work: remove the // from the next line...
// console.log(rollDie(), rollDie(), rollDie());
// ...then run: node challenges/062-dice-roller/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { rollDie };
