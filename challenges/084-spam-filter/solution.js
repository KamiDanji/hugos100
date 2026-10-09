// Challenge 084: Spam Filter 🚫
// Read challenge.md first.

function isSpam(message) {
  const lower = message.toLowerCase();
  return lower.includes("free money") || lower.includes("you won");
}

// See it work: remove the // from the next line...
// console.log(isSpam("click here for FREE MONEY"));
// ...then run: node challenges/084-spam-filter/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { isSpam };
