function minMax(arr) {
  let max = 0;
  let min = Number.MAX_VALUE;

  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }

    if (element < min) {
      min = element;
    }
  });

  return [min, max];
}
