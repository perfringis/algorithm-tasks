function sumIntervals(xs) {
  let ys = xs.sort(([a, b], [c, d]) => a - c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a, b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b - m);
    m = Math.max(m, b);
  }
  return res;
}

const test1 = [[1, 5]];
const test2 = [
  [1, 5],
  [6, 10],
];
const test3 = [
  [1, 5],
  [1, 5],
];
const test4 = [
  [0, 20],
  [-1e8, 10],
  [30, 40],
];

// sumIntervals(test1);

// console.log("\n");
// sumIntervals(test2);

// console.log("\n");
// sumIntervals(test3);

console.log("\n");
console.log(sumIntervals(test4));
