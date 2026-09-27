// Challenge 047: Chat Filter 💬
// Read challenge.md first. Two functions today!

function censorWord(word, bannedWord) {
  // ✏️ your code here
  if (word === bannedWord) {
    return "****";
  }
  return word;
}

function filterChat(words, bannedWord) {
  // ✏️ your code here (use censorWord inside the loop!)
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += censorWord(words[i], bannedWord) + " ";
  }
  return result;
}

// See it work: remove the // from the next line...
// console.log(filterChat(["gg", "noob"], "noob"));
// ...then run: node challenges/047-chat-filter/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { censorWord, filterChat };
