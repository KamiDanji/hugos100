// Challenge 068: Roll 'Em All 📦
// Read challenge.md first.

function rollMany(count) {
  // ✏️ your code here
  const rolls = [];
  for (let index = 0; index < count; index += 1) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return rolls;
}

// See it work: remove the // from the next line...
// console.log(rollMany(5));
// ...then run: node challenges/068-roll-em-all/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { rollMany };
