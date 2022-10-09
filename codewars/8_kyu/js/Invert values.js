function invert(array) {
  if (!array) {
    return [];
  } else {
    return array.map((x) => x * -1);
  }
}
