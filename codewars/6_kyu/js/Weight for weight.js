function orderWeight(strng) {
  return strng
    .split(" ")
    .sort((a, b) => {
      const sumA = a.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
      const sumB = b.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
      return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    })
    .join(" ");
}
