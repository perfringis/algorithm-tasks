const comp = (array1, array2) => {
  if (!array1 || !array2) {
    return false;
  }

  const temp1 = array1.sort((a, b) => a - b);
  const temp2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < temp1.length; i++) {
    if (temp2[i] !== temp1[i] * temp1[i]) {
      return false;
    }
  }

  return true;
};
