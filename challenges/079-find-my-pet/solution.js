// Challenge 079: Find My Pet 🔍
// Read challenge.md first.

function findPet(pets, name) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].name === name) {
      return pets[i];
    }
  }
  return null;
}

// See it work: remove the // from the next line...
// console.log(findPet([{ name: "Rex", sound: "Woof" }, { name: "Mia", sound: "Meow" }], "Mia"));
// ...then run: node challenges/079-find-my-pet/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { findPet };
