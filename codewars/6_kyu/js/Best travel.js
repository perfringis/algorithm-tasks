function chooseBestSum(t, k, ls) {
  // your code
}

//Prints the array
function printArr(a, n) {
  for (let i = 0; i < n; i++) {
    console.log(a[i]);
  }
  console.log();
}

//Generating permutation using Heap Algorithm
function heapPermutation(a, size, n) {
  // if size becomes 1 then prints the obtained
  // permutation
  if (size == 1) printArr(a, n);

  for (let i = 0; i < size; i++) {
    heapPermutation(a, size - 1, n);

    // if size is odd, swap first and last
    // element
    if (size % 2 == 1) {
      let temp = a[0];
      a[0] = a[size - 1];
      a[size - 1] = temp;
    }

    // If size is even, swap ith and last
    // element
    else {
      let temp = a[i];
      a[i] = a[size - 1];
      a[size - 1] = temp;
    }
  }
}

heapPermutation([50, 55, 57, 58, 60], 5,3)