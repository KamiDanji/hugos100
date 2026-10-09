// Challenge 086: File Detective 🕵️
// Read challenge.md first.

function isImage(filename) {
  return filename.endsWith(".png") || filename.endsWith(".jpg");
}

function isHidden(filename) {
  return filename.startsWith(".");
}

// See it work: remove the // from the next line...
// console.log(isImage("holiday.png"), isHidden(".gitignore"));
// ...then run: node challenges/086-file-detective/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { isImage, isHidden };
