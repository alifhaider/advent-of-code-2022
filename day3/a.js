let fs = require("fs");

const inputOfRuckSack = fs.readFileSync("./day3.input.txt", "utf-8");

const allRuckSack = inputOfRuckSack.split("\n");

const ruckSack = allRuckSack.map((ruck) => ruck);

let result = 0;
for (let i = 0; i < ruckSack.length; i++) {
  if (ruckSack[i]) {
    let output = getMatchedText(ruckSack[i]).charCodeAt(0);
    result = result + getValueforText(output);
  }
}

function getMatchedText(text) {
  let firstHalfText = text.slice(0, text.length / 2);
  let secondHalfText = text.slice(text.length / 2, text.length);
  for (let i = 0; i < firstHalfText.length; i++) {
    for (let j = 0; j < secondHalfText.length; j++) {
      if (firstHalfText[i] === secondHalfText[j]) {
        return firstHalfText[i];
      }
    }
  }
}

function getValueforText(output) {
  let value;
  if (output >= 65 && output <= 90) {
    value = output - 64 + 26;
    return value;
  }

  if (output >= 97 && output <= 122) {
    value = output - 96;
    return value;
  }
}

console.log(result); //8018
