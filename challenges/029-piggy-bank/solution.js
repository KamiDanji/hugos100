// Challenge 029: Piggy Bank 🐷
// Read challenge.md first.

function piggyBank(days) {
  // ✏️ your code here
  let total = 0;
  for (let i = 1; i <= days; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

// See it work: remove the // from the next line...
// console.log(piggyBank(10));
// ...then run: node challenges/029-piggy-bank/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { piggyBank };
