function convertFrac(l) {
  const len = l.length;

  if (len === 1) {
    return `(${l[0][0]},${l[0][1]})`;
  }

  const temp = [];
  for (let i = 0; i < len; ++i) {
    temp.push(l[i][1]);
  }

  while (temp.every((v) => v !== temp[0])) {
    
  }
}

// console.log(
//   convertFrac([
//     [1, 2],
//     [1, 3],
//     [1, 4],
//   ])
// );

console.log(convertFrac([[1, 4]]));

// TODO
