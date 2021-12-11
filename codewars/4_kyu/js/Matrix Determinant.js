if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth) {
    var flattend = [];
    (function flat(array, depth) {
      for (let el of array) {
        if (Array.isArray(el) && depth > 0) {
          flat(el, depth - 1);
        } else {
          flattend.push(el);
        }
      }
    })(this, Math.floor(depth) || 1);
    return flattend;
  };
}

function determinant(matrix) {
  if (matrix.length == 1) {
    return matrix.flat()[0];
  } else if (matrix.length == 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  } else {
    let answer = 0;

    for (let j = 0; j < matrix.length; ++j) {
      let factor =
        (-1) ** j * matrix[0][j] * determinant(subMatrix(matrix, 0, j));

      answer += factor;
    }

    return answer;
  }
}

function subMatrix(matrix, rowIdx, colIdx) {
  const temp_arr = [];
  for (let i = 0; i < matrix.length; ++i) {
    const row = matrix[i];
    const temp_row = [];

    // ignore 0 row
    if (i === rowIdx) {
      continue;
    }

    for (let j = 0; j < row.length; ++j) {
      // ignore index column
      if (j === colIdx) {
        continue;
      }
      temp_row.push(matrix[i][j]);
    }
    temp_arr.push(temp_row);
  }
  return temp_arr;
}

console.log(determinant([[1]]));

console.log(
  determinant([
    [1, 3],
    [2, 5],
  ])
);

console.log(
  determinant([
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ])
);
