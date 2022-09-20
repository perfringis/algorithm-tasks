const solution = (input, markers) => {
  markers = markers.join("");
  const rex = new RegExp(`[\\s]+[${markers}]+.*$`, 'gmi');

  return input.replace(rex, "");
};

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);
