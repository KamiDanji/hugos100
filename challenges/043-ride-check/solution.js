// Challenge 043: Ride Check 🎢
// Read challenge.md first.

function rideCheck(height, hasTicket) {
  // ✏️ your code here
  if (height < 120) {
    return "Sorry, you're not tall enough.";
  }
  if (!hasTicket) {
    return "You need a ticket first.";
  }
  return "Enjoy the ride!";
}

// See it work: remove the // from the next line...
// console.log(rideCheck(150, true));
// ...then run: node challenges/043-ride-check/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { rideCheck };
