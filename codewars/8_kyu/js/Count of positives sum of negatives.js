function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((x) => x > 0).length,
        input.filter((x) => x < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
