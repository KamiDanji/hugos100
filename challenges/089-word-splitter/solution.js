// Challenge 089: Word Splitter 🧩
// Read challenge.md first.

function slugify(title) {
  return title.split(" ").join("-");
}

function wordCount(title) {
  return title.split(" ").length;
}

// See it work: remove the // from the next line...
// console.log(slugify("my summer photos"));
// ...then run: node challenges/089-word-splitter/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { slugify, wordCount };
