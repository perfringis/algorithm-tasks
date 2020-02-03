const comp = (array1, array2) => {
  if (!array1 || !array2) {
    return false;
  } else {
    for (let i = 0; i < array2.length; ++i) {
      let element = Math.sqrt(array2[i]);
      if (!array1.includes(element)) {
        return false;
      }
    }
    return true;
  }
};

a1 = [12]
a2 = [145];
console.log(comp(a1, a2));

// TODO finish it