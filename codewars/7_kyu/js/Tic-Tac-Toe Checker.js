function isSolved(board) {
  const x = 1;
  const o = 2;

  const possibleWins = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  for (let i = 0; i < possibleWins.length; i++) {
    if (possibleWins[i].every((v) => v === x)) {
      return 1;
    } else if (possibleWins[i].every((v) => v === o)) {
      return 2;
    }
  }

  for(let i= 0; i < board.length; i++) {
    if(board[i].includes(0)) {
      return -1;
    }
  }

  return 0;
}

const example = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
];

console.log(isSolved(example));
