// Challenge 014: What to Wear 🧥
// Read challenge.md first.

function whatToWear(temperature) {
  // ✏️ your code here
  if (temperature < 10) {
    return "Coat 🧥"
  }
  else if (temperature >= 10 && temperature < 20) {
    return "Sweater 🧶";
  }
  else if (temperature >= 20) {
    return "T-shirt 👕";
  }
}

// See it work: remove the // from the next line...
// console.log(whatToWear(15));
// ...then run: node challenges/014-what-to-wear/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { whatToWear };
