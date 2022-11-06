function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const first = arr[i] + 1;
    const second = arr[i + 1];

    if (first !== second) {
      return second;
    }
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
