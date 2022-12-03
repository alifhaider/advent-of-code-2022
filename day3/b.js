let fs = require("fs");

const inputOfRuckSack = fs.readFileSync("./day3.input.txt", "utf-8");

const allRuckSack = inputOfRuckSack.split("\n");
const ruckSack = allRuckSack.map((ruck) => ruck);

let result = 0;
for (let i = 0; i < ruckSack.length; i += 3) {
  if (i % 3 === 0) {
    let output = getMatchedLetter(
      ruckSack[i],
      ruckSack[i + 1],
      ruckSack[i + 2]
    ).charCodeAt(0);
    result = result + getValueforLetter(output);
  }
}

function getMatchedLetter(text1, text2, text3) {
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      for (let k = 0; k < text3.length; k++) {
        if (text1[i] === text2[j] && text2[j] === text3[k]) {
          return text1[i];
        }
      }
    }
  }
}

//a = 1, z= 26
//A = 27, Z = 52

function getValueforLetter(output) {
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

console.log(result); //2518
