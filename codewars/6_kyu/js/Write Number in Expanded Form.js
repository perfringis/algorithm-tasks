function expandedForm(num) {
  let str = num.toString();
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != 0) {
      result.push(str[i] + "0".repeat(str.length - i - 1));
    }
  }
  return result.join(" + ");
}
