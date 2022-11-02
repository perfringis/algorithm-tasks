function longest(s1, s2) {
  return [...new Set([...new Set(s1), ...new Set(s2)].sort().join(''))];
}

console.log(longest("xxxxyyyyabklmopq"));
