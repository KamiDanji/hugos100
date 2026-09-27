// Challenge 040: Grade Counter 📋
// Read challenge.md first.

function countPasses(grades) {
  // ✏️ your code here
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 5.5) {
      count += 1;
    }
  }
  return count;
}

// See it work: remove the // from the next line...
// console.log(countPasses([7.2, 4.0, 5.5, 9.1]));
// ...then run: node challenges/040-grade-counter/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { countPasses };
