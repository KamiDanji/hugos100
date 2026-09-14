// Challenge 015: Who Goes First 🎲
// Read challenge.md first.

function whoStarts(roll) {
  // ✏️ your code here
  if (roll % 2 === 0) {
    return "Player 1 starts";
  }
  else {
    return "Player 2 starts";
  }
}

// See it work: remove the // from the next line...
// console.log(whoStarts(4));
// ...then run: node challenges/015-who-goes-first/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { whoStarts };
