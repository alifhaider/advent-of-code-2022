let fs = require('fs');

const allSections = fs.readFileSync('./day4.input.txt', 'utf-8');

// const allSections = `
//   2-4,6-8
//   2-3,4-5
//   5-7,7-9
//   2-8,3-7
//   6-6,4-6
//   2-6,4-8
// `;

const lines = allSections.replace(/\r/g, '').trim().split('\n');

const res = lines.map((line) => {
  const [first, second] = line
    .split(',')
    .map((interval) => interval.split('-').map(Number))
    .sort((a, b) => {
      console.log('a', a, 'b', b);
      const oneSize = a[1] - a[0];
      const twoSize = b[1] - b[0];
      return twoSize - oneSize;
    });

  const overlap = first[1] >= second[0] && second[1] >= first[0];

  return overlap ? 1 : 0;
});
console.log(res.reduce((a, b) => a + b, 0)); //823
