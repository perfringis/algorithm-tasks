function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }
  
  let longest = "";
  for (let i = 0; i < strarr.length; i++) {
    let temp = strarr.slice(i, i + k).join("");
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
}
