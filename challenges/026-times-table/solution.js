// Challenge 026: Times Table ✖️
// Read challenge.md first.

function timesTable(number) {
  // ✏️ your code here
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result += `${i} x ${number} = ${i * number}\n`;
  }
  return result;
}

// See it work: remove the // from the next line...
// console.log(timesTable(2));
// ...then run: node challenges/026-times-table/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { timesTable };
