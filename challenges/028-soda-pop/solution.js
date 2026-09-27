// Challenge 028: Soda Pop 🥤
// Read challenge.md first.

function sodaPop(n) {
  // ✏️ your code here
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "soda-pop ";
    } else if (i % 3 === 0) {
      result += "soda ";
    } else if (i % 5 === 0) {
      result += "pop ";
    } else {
      result += i + " ";
    }
  }
  return result;
}

// See it work: remove the // from the next line...
// console.log(sodaPop(15));
// ...then run: node challenges/028-soda-pop/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { sodaPop };
