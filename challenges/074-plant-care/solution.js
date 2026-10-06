// Challenge 074: Plant Care 🪴
// Read challenge.md first.

function waterPlant(plant) {
  // ✏️ your code here
  plant.height += 5;
  plant.watered = true;
  return plant;
}

// See it work: remove the // from the next line...
// console.log(waterPlant({ name: "Fred", height: 20 }));
// ...then run: node challenges/074-plant-care/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { waterPlant };
