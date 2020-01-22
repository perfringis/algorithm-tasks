let generateRange = (min, max, step) => {
  let list = [];

  for (let i = min; i <= max; i += step) {
      list.push(i);
  }

  return list;
};

console.log(generateRange(2,10,2))
console.log(generateRange(1,10,3))