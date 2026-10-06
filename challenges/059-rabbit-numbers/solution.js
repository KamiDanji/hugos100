// Challenge 059: Rabbit Numbers 🐰
// Read challenge.md first. No for, no while.

function fib(n) {
  // ✏️ your code here
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// See it work: remove the // from the next line...
// console.log(fib(10));
// ...then run: node challenges/059-rabbit-numbers/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { fib };
