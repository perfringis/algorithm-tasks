function solution(str, ending) {
  return str.substring(str.length - ending.length, str.length, str) === ending;
}

console.log(solution("abcde", "cde"));
