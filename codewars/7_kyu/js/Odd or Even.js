const oddOrEven = array => {
  return array.reduce((a, b, i, arr) => {
    return a + b;
  }, 0) % 2 == 0 ? "even" : "odd";
};

console.log(oddOrEven([1]));
console.log(oddOrEven([-1023, -1, 3]));
