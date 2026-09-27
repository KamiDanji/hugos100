// Challenge 024: Rocket Countdown 🚀
// Read challenge.md first.

function rocketCountdown(start) {
  // ✏️ your code here
  let result = "";
  for (let i = start; i >= 1; i--) {
    result += i + " ";
  }
  return result + "Liftoff!";
}

// See it work: remove the // from the next line...
// console.log(rocketCountdown(5));
// ...then run: node challenges/024-rocket-countdown/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { rocketCountdown };
