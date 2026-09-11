// Challenge 011: Movie Night 🎬
// Read challenge.md first.

function canWatch(age) {
  // ✏️ your code here
  if (age >= 13) {
    return "Enjoy the movie!";
  }
  return "Sorry, too young.";
}

// See it work: remove the // from the next line...
// console.log(canWatch(15));
// ...then run: node challenges/011-movie-night/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { canWatch };
