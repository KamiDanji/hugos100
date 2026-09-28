// Challenge 054: Power Up ⚡
// Read challenge.md first. No for, no while. The function IS the loop.

function power(base, exp) {
  // ✏️ your code here
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}

// See it work: remove the // from the next line...
// console.log(power(2, 10));
// ...then run: node challenges/054-power-up/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { power };
