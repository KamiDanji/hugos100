// Challenge 087: Clock Padder 🕰️
// Read challenge.md first.

function clockTime(minutes, seconds) {
  const padded = `${seconds}`.padStart(2, "0");
  return `${minutes}:${padded}`;
}

// See it work: remove the // from the next line...
// console.log(clockTime(5, 5));
// ...then run: node challenges/087-clock-padder/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { clockTime };
