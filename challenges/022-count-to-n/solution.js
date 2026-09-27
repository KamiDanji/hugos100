// Challenge 022: Count to N 🔢
// Read challenge.md first.

function countTo(n) {
  // ✏️ your code here
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }
  return result;
}

// See it work: remove the // from the next line...
// console.log(countTo(5));
// ...then run: node challenges/022-count-to-n/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { countTo };
