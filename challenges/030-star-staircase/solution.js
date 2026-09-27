// Challenge 030: Star Staircase ⭐
// Read challenge.md first.

function starStaircase(levels) {
  // ✏️ your code here
  let staircase = "";
  let row = "";
  for (let i = 1; i <= levels; i++) {
    row += "*";
    staircase += row + "\n";
  }
  return staircase;
}

// See it work: remove the // from the next line...
// console.log(starStaircase(5));
// ...then run: node challenges/030-star-staircase/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { starStaircase };
