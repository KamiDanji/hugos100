// Challenge 038: High Score 🏆
// Read challenge.md first.

function highScore(scores) {
  // ✏️ your code here
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

// See it work: remove the // from the next line...
// console.log(highScore([120, 90, 300, 250]));
// ...then run: node challenges/038-high-score/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { highScore };
