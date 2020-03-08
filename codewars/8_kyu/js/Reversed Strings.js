const solution = str => {
  if (str === "") return "";
  else return solution(str.substr(1)) + str.charAt(0);
};
