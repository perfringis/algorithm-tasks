var countSheep = function (num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(`${i} sheep...`);
  }

  return arr.join("");
};
