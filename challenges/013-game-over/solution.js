// Challenge 013: Game Over 💀
// Read challenge.md first.

function checkLives(lives) {
  // ✏️ your code here
  if (lives === 0) {
    return "Game over";
  }
  return "Keep playing";
}

// See it work: remove the // from the next line...
// console.log(checkLives(0));
// ...then run: node challenges/013-game-over/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { checkLives };
