const removeDuplicateWords = s => {
  return s
    .split(" ")
    .reduce((tempList, elem) => {
      if (!tempList.includes(elem)) {
        tempList.push(elem);
      }
      return tempList;
    }, [])
    .join(" ");
};

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
