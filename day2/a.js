let fs = require("fs");

const textOfGames = fs.readFileSync("./day2.input.txt", "utf-8");

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

//A = rock = X
//B = paper = Y
//C = scissor = Z

function getScoreOfGame(game) {
  //rock vs paper || paper vs scissor || scissor vs rock
  if (
    (game[0] === "A" && game[1] === "Y") ||
    (game[0] === "B" && game[1] === "Z") ||
    (game[0] === "C" && game[1] === "X")
  ) {
    return getValueForPicks(game[1]) + 6;
  }

  //rock vs rock || paper vs paper || scissor vs scissor
  if (
    (game[0] === "A" && game[1] === "X") ||
    (game[0] === "B" && game[1] === "Y") ||
    (game[0] === "C" && game[1] === "Z")
  ) {
    return getValueForPicks(game[1]) + 3;
  }

  return getValueForPicks(game[1]);
}

let totalScore = 0;
for (let i = 0; i < games.length; i++) {
  if (games[i]) {
    totalScore = totalScore + getScoreOfGame(games[i]);
  }
}
console.log(totalScore);

return totalScore; // 15422
