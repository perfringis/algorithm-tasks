function isIsogram(str) {
  if (!str) {
    return true;
  }

  const temp = {};

  for (const letter of str.toLowerCase()) {
    if (!temp[letter]) {
      temp[letter] = 1;
    } else {
      temp[letter] += 1;
    }
  }

  return Math.max(...Object.values(temp)) === 1;
}
