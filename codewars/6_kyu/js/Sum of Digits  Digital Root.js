const digital_root = (n) => {
  n = n + "";

  if (n.length == 1) {
    return Number(n);
  }

  const sum = n
    .split("")
    .map((x) => {
      return Number(x);
    })
    .reduce((prev, next) => {
      return prev + next;
    }, 0);

  return digital_root(sum);
};

console.log(digital_root(942));
