// Challenge 080: Character Creator 🧙
// Read challenge.md first.

function createCharacter(name, role) {
  return { name, role, level: 1, hp: 100 };
}

// See it work: remove the // from the next line...
// console.log(createCharacter("Zelda", "wizard"));
// ...then run: node challenges/080-character-creator/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { createCharacter };
