// Challenge 070: Secret Code 🔐
// Read challenge.md first.

function makeCode(length) {
  // ✏️ your code here
  let code = "";
  for (let index = 0; index < length; index += 1) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

// See it work: remove the // from the next line...
// console.log(makeCode(6));
// ...then run: node challenges/070-secret-code/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { makeCode };
