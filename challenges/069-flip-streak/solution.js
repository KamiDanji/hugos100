// Challenge 069: Flip Streak 🪙
// Read challenge.md first.

function flipsUntilHeads() {
  // ✏️ your code here
  let flips = 0;
  do {
    flips += 1;
  } while (Math.random() >= 0.5);
  return flips;
}

// See it work: remove the // from the next line...
// console.log(flipsUntilHeads());
// ...then run: node challenges/069-flip-streak/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { flipsUntilHeads };
