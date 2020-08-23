const isSolved = (board) => {
  const emptySpot = 0;
  const x = 1;
  const o = 2;

  console.log(isAnyEmptySpot(board, emptySpot));
};

const isAnyEmptySpot = (board, emptySpot) => {
  for (const row of board) {
    if (row.includes(emptySpot)) {
      return true;
    }
  }
  return false;
};

const example = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
];

isSolved(example);

// TODO