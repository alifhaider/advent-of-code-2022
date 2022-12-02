let fs = require("fs");

const textOfGames = fs.readFileSync("./a.input.txt", "utf-8");

let arrayOfGames = textOfGames.split("\n");

let games = arrayOfGames.map((game) => game !== "" && game.split(" "));
function getValueForPicks(pick1) {
  switch (pick1) {
    case "X": {
      return 1;
      break;
    }

    case "Y": {
      return 2;
      break;
    }

    case "Z": {
      return 3;
      break;
    }

    default: {
      break;
    }
  }
}

function getScoreOfGame(game) {
  //rock && lose = scissors
  if (game[0] === "A" && game[1] === "X") {
    return getValueForPicks("Z") + 0;
  }
  //paper && lose = rock
  if (game[0] === "B" && game[1] === "X") {
    return getValueForPicks("X") + 0;
  }
  //scissor && lose = paper
  if (game[0] === "C" && game[1] === "X") {
    return getValueForPicks("Y") + 0;
  }

  //rock && win = paper
  if (game[0] === "A" && game[1] === "Z") {
    return getValueForPicks("Y") + 6;
  }
  //paper && win = scissors
  if (game[0] === "B" && game[1] === "Z") {
    return getValueForPicks("Z") + 6;
  }

  //scissor && win = rock
  if (game[0] === "C" && game[1] === "Z") {
    return getValueForPicks("X") + 6;
  }

  //rock && draw = rock
  if (game[0] === "A" && game[1] === "Y") {
    return getValueForPicks("X") + 3;
  }
  //paper && draw = paper
  if (game[0] === "B" && game[1] === "Y") {
    return getValueForPicks("Y") + 3;
  }
  //scissor && draw = scissor
  if (game[0] === "C" && game[1] === "Y") {
    return getValueForPicks("Z") + 3;
  }
}

let totalScore = 0;
for (let i = 0; i < games.length; i++) {
  if (games[i]) {
    totalScore = totalScore + getScoreOfGame(games[i]);
  }
}
console.log(totalScore);

return totalScore; //15422
