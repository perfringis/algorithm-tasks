const reverseSeq = n => {
  let list = [];
  for (let i = n; i > 0; --i) {
    list.push(i);
  }
  return list;
};

console.log(reverseSeq(5))