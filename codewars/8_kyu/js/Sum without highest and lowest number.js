function sumArray(array) {
  if (!array || array.length < 2) {
    return 0;
  }

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
}
