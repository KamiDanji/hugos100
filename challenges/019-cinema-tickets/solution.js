// Challenge 019: Cinema Tickets 🍿
// Read challenge.md first.

function ticketPrice(age) {
  // ✏️ your code here
  if (age < 12) {
    return 6;
  } else if (age >= 65) {
    return 8;
  }
  return 12;
}

// See it work: remove the // from the next line...
// console.log(ticketPrice(30));
// ...then run: node challenges/019-cinema-tickets/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { ticketPrice };
