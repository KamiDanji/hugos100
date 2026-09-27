// Challenge 050: Scoreboard 🥇
// Read challenge.md first. Halfway point! Two functions, all yours.
//
// ✏️ your code here

function addPoints(scores, points) {
  scores.push(points);
  return scores;
}

function averageScore(scores) {
  if (scores.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

// When both functions are done, copy this line to the bottom (without the //):
module.exports = { addPoints, averageScore };
