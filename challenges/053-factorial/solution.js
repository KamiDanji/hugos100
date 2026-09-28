// Challenge 053: Factorial 🎲
// Read challenge.md first. No for, no while.

function factorial(n) {
  // ✏️ your code here
    if (n === 1) {
        return 1;
    }else if (n < 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// See it work: remove the // from the next line...
// console.log(factorial(5));
// ...then run: node challenges/053-factorial/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { factorial };
