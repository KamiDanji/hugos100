// Challenge 049: Team Namer 🏐
// Read challenge.md first.

function introduceTeam(names, teamName) {
  // ✏️ your code here
  let list = names[0];
  for (let i = 1; i < names.length - 1; i++) {
    list += ", " + names[i];
  }
  list += " and " + names[names.length - 1];
  return `${list}: together we are ${teamName}!`;
}

// See it work: remove the // from the next line...
// console.log(introduceTeam(["Mo", "Sara", "Liv"], "The Sparks"));
// ...then run: node challenges/049-team-namer/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { introduceTeam };
