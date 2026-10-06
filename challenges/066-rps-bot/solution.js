// Challenge 066: RPS Bot 🤖
// Read challenge.md first.

function botMove() {
  // ✏️ your code here
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

// See it work: remove the // from the next line...
// console.log(botMove());
// ...then run: node challenges/066-rps-bot/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { botMove };
