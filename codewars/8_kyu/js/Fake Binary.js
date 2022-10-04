function fakeBin(x) {
  return x
    .split("")
    .map((x) => {
      if (x < 5) {
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
}

console.log(fakeBin("45385593107843568"));
