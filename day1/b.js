//Problem Link = https://adventofcode.com/2022/day/1

//This is part-2 solution

let fs = require("fs");

const input = fs.readFileSync("./day1.input.txt", "utf-8");
const array = input.replaceAll("\r\n", " ").split("  ");

let totalOfThree = 0;
let arrayOfSums = [];

for (let i = 0; i < array.length; i++) {
  let numbers = array[i].split(" ").map((number) => Number(number));
  let sum = 0;

  for (let j = 0; j < numbers.length; j++) {
    sum = sum + numbers[j];
  }
  arrayOfSums.push(sum);
}

let sorted = arrayOfSums.sort((a, b) => b - a);
totalOfThree = sorted[0] + sorted[1] + sorted[2];

console.log(totalOfThree);

return totalOfThree; //201491
