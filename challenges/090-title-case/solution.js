// Challenge 090: Title Case 🎩
// Read challenge.md first.

function titleCase(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// See it work: remove the // from the next line...
// console.log(titleCase("the big lebowski"));
// ...then run: node challenges/090-title-case/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { titleCase };
