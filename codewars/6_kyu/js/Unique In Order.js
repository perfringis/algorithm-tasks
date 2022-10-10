const uniqueInOrder = (iterable) => {
  const temp = [];

  if (!iterable) {
    return temp;
  }

  let acc = iterable[0];
  temp.push(acc);
  for (let i = 1; i < iterable.length; i++) {
    const curr = iterable[i];

    if (curr === acc && !temp.includes(curr)) {
      temp.push(curr);
    } else if (curr === acc && !temp.includes(curr)) {
      continue;
    } else if (curr !== acc) {
      acc = curr;
      temp.push(curr);
    }
  }

  return temp;
};
