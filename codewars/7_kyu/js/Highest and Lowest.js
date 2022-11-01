function highAndLow(numbers) {
  numbers = numbers.split(" ").map((number) => {
    return parseInt(number, 10);
  });

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return `${max} ${min}`;
}

highAndLow("1 2 3")