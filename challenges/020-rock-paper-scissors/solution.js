// Challenge 020: Rock Paper Scissors ✊✋✌️
// Read challenge.md first.

function playRps(player1, player2) {
  // ✏️ your code here
  if (player1 === player2) {
    return "It's a tie!";
  }
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 wins!";
  }
  return "Player 2 wins!";
}

// See it work: remove the // from the next line...
// console.log(playRps("rock", "scissors"));
// ...then run: node challenges/020-rock-paper-scissors/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { playRps };
