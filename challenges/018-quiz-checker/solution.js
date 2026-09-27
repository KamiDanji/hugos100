// Challenge 018: Quiz Checker ❓
// Read challenge.md first.

function checkAnswer(answer) {
  // ✏️ your code here
  if (answer.toLowerCase() === "paris") {
    return "Correct! ✅";
  }
  return "Wrong ❌";
}

// See it work: remove the // from the next line...
// console.log(checkAnswer("PARIS"));
// ...then run: node challenges/018-quiz-checker/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { checkAnswer };
