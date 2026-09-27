// Challenge 023: Stair Climber 🪜
// Read challenge.md first.

function stepsToFloor(floors) {
  // ✏️ your code here
  let total = 0;
  for (let i = 1; i <= floors; i++) {
    total += i * 10;
  }
  return total;
}

// See it work: remove the // from the next line...
// console.log(stepsToFloor(3));
// ...then run: node challenges/023-stair-climber/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { stepsToFloor };
