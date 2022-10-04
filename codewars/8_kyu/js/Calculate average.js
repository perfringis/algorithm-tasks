function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  return (
    array.reduce((a, b) => {
      return a + b;
    }, 0) / array.length
  );
}
