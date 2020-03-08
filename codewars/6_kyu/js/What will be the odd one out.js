const oddOneOut = str => {
  var counter = new Map();

  for (let letter of str) {
    if (letter in counter) {
      counter.set(letter, ++counter.get(letter));
    } else {
      counter.set(letter, 1);
    }
  }

  let tempList = [];
  for (let [letter, value] of counter) {
    if (value % 2 != 0) {
      tempList.push(letter);
    }
  }

  return tempList;
};

console.log(oddOneOut("Hello World"));

// TODO