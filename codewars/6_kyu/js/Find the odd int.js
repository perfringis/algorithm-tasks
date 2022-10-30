function findOdd(A) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      result = A[i];
    }
    count = 0;
  }
  return result;
}
