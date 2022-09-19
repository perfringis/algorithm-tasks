function onBoard(x, y, N) {
  if (x >= 1 && x <= N && y >= 1 && y <= N) {
    return true;
  } else {
    return false;
  }
}

function convertToCoords(givenPos) {
  const chessboard = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];

  for (let i = 0; i < chessboard.length; ++i) {
    for (let j = 0; j < chessboard[i].length; ++j) {
      const pos = chessboard[i][j];

      if (pos == givenPos) {
        return [i, j];
      }
    }
  }
}

function knight(start, finish) {
  start = convertToCoords(start);
  finish = convertToCoords(finish);

  // knight moves
  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  // queue
  let k = [];
  k.push(start);

  let visited = [
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
  ];

  visited[start[0]][start[1]] = true;

  let kmove = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  while (k.length != 0) {
    let z = k.shift();

    if (z[0] === finish[0] && z[1] === finish[1]) {
      return kmove[z[0]][z[1]];
    }

    for (let i = 0; i < 8; ++i) {
      let newX = z[0] + dx[i];
      let newY = z[1] + dy[i];

      if (onBoard(newX, newY, 8) && !visited[newX][newY]) {
        visited[newX][newY] = true;
        kmove[newX][newY] = kmove[z[0]][z[1]] + 1;
        k.push([newX,newY]);
      }
    }
  }

  return -1;
}

console.log(knight("a1", "c1"));
console.log(knight("a1", "f1"));
console.log(knight("a1", "f3"));
console.log(knight("a1", "f4"));
console.log(knight("a1", "f7"));
