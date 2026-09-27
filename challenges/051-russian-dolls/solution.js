// Challenge 051: Russian Dolls 🪆
// Read challenge.md first. No for, no while. The function IS the loop.

function countdown(n) {
  // ✏️ your code here
  if (n === 0) {
    return "Liftoff!";
  }
  return `${n} ` + countdown(n - 1);
}

// See it work: remove the // from the next line...
// console.log(countdown(3));
// ...then run: node challenges/051-russian-dolls/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { countdown };
