// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  let bears = Math.floor(bonus / price);

  if (bears <= 0) {
    return 0;
  }

  let lvl = 0;
  let i = 2;

  while (bears > 0) {
    let val = Math.pow(i, 2);

    bears -= val;
    lvl++;
    i++
  }

  return lvl;
};

console.log(beeramid(9, 2));
console.log(beeramid(10, 2));
console.log(beeramid(11, 2));
console.log(beeramid(21, 1.5));
console.log(beeramid(454, 5));
console.log(beeramid(455, 5));
console.log(beeramid(4, 4));
console.log(beeramid(3, 4));
console.log(beeramid(0, 4));
console.log(beeramid(-1, 4));
console.log(beeramid(1500, 2)); // should === 12
console.log(beeramid(5000, 3)); // should === 16
