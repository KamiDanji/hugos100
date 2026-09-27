// Challenge 035: Pet Counter 🐾
// Read challenge.md first.

function petReport(pets) {
  // ✏️ your code here
  if (pets.length === 0) {
    return "A quiet weekend.";
  }
  return `You are watching ${pets.length} pets this weekend!`;
}

// See it work: remove the // from the next line...
// console.log(petReport(["Rex", "Mimi", "Bubbles"]));
// ...then run: node challenges/035-pet-counter/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { petReport };
