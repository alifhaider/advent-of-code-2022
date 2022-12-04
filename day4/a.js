let fs = require('fs');

const allSections = fs.readFileSync('./day4.input.txt', 'utf-8');

const individualSection = allSections.split('\r\n');
// const individualSection = [
//   '2-4,6-8',
//   '2-3,4-5',
//   '5-7,7-9',
//   '2-8,3-7',
//   '6-6,4-6',
//   '2-6,4-8',
// ];

const slots = individualSection
  .map((section) =>
    section
      .split(',')
      .map((slot) => slot.split('-').map((time) => Number(time)))
  )
  .flat();

//2-8 -> 3-7
//6-6 -> 4-6

function getAllBetweenTimes(time1, time2) {
  let count = 0;
  if (
    (time1[0] >= time2[0] && time1[1] <= time2[1]) ||
    (time1[0] <= time2[0] && time1[1] >= time2[1])
  ) {
    count++;
  }
  return count;
}

let total = 0;
for (let i = 0; i < slots.length; i += 2) {
  let count = getAllBetweenTimes(slots[i], slots[i + 1]);
  total = total + count;
}

console.log(total); //431
