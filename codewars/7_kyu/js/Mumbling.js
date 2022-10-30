function accum(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
  }
  return result.join("-");
}
