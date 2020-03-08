const pigIt = str => {
  let suffix = "ay";
  return str
    .split(" ")
    .map(word => {
      return word.substring(1, word.length + 1) + word[0] + suffix;
    })
    .join(" ");
};

console.log(pigIt("Pig latin is cool"));

// TODO