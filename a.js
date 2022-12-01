let fs = require('fs');

const input = fs.readFileSync('./a.input.txt', 'utf-8');
const array = input.replaceAll('\r\n', ' ').split('  ');

let highestSum = 0;

for (let i = 0; i < array.length; i++) {
  let numbers = array[i].split(' ').map((number) => Number(number));
  let sum = 0;
  for (let j = 0; j < numbers.length; j++) {
    sum = sum + numbers[j];
  }

  if (sum > highestSum) {
    highestSum = sum;
  }
}

console.log(highestSum);
