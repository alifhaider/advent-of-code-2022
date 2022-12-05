let fs = require("fs");

const inputText = fs
  .readFileSync("./day5.input.txt", "utf-8")
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd(); // Remove ending whitespace;

const [rawStacks, rawMoves] = inputText.split("\n\n").map((x) => x.split("\n"));

const parsedStacks = rawStacks.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);

//Last line of the input is the indexes of the stacks
const indexes = parsedStacks.pop();

const stacks = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      // Add line[i] to the stack indexes[i]
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
      console.log(stacks[indexes[i]]);
    }
  }
}

const moves = [];
for (const move of rawMoves) {
  const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  moves.push({
    count: parseInt(match[1]),
    from: parseInt(match[2]),
    to: parseInt(match[3]),
  });
}

function part1() {
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    for (let i = 0; i < move.count; i++) {
      const crate = localStacks[move.from].pop();
      localStacks[move.to].push(crate);
    }
  }
  console.log(
    indexes
      .map((value) => {
        const stack = localStacks[value];
        return stack[stack.length - 1];
      })
      .join("")
  );
}
part1(); //TPGVQPFDH

function part2() {
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    const crates = localStacks[move.from].splice(-move.count, move.count);
    localStacks[move.to] = localStacks[move.to].concat(crates);
  }
  console.log(
    indexes
      .map((value) => {
        const stack = localStacks[value];
        return stack[stack.length - 1];
      })
      .join("")
  );
}
part2(); //DMRDFRHHH
