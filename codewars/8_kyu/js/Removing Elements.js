function removeEveryOther(arr) {
  return arr.filter((x, i) => i % 2 === 0);
}


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))