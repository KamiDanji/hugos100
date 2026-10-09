// Challenge 081: Nickname Slicer ✂️
// Read challenge.md first.

function tagOf(name) {
  return name.slice(0, 3).toUpperCase();
}

// See it work: remove the // from the next line...
// console.log(tagOf("Benjamin"));
// ...then run: node challenges/081-nickname-slicer/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { tagOf };
