function findDifference(a, b) {
  return Math.abs(
    a.reduce((previousValue, currentValue) => previousValue * currentValue, 1) -
      b.reduce((previousValue, currentValue) => previousValue * currentValue, 1)
  );
}
