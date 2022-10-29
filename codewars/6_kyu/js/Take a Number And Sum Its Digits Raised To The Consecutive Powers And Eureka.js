function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;
    let num = i.toString();

    for (let j = 0; j < num.length; j++) {
      sum += Math.pow(num[j], j + 1);
    }

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}
