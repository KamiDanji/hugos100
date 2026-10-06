// Challenge 057: Snack Stack 🍿
// Read challenge.md first. No for, no while. The function IS the loop.

function totalCalories(calories) {
  // ✏️ your code here
  if (calories.length === 0) return 0;
  return calories[0] + totalCalories(calories.slice(1));
}

// See it work: remove the // from the next line...
// console.log(totalCalories([220, 150, 310]));
// ...then run: node challenges/057-snack-stack/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { totalCalories };
