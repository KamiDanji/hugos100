// Challenge 067: Loot Drop 🗡️
// Read challenge.md first.

function openChest() {
  // ✏️ your code here
  return Math.random() < 1 / 3 ? "epic sword" : "dust";
}

// See it work: remove the // from the next line...
// console.log(openChest());
// ...then run: node challenges/067-loot-drop/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { openChest };
