function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
