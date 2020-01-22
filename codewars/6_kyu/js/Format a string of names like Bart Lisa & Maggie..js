let list = names => {
  let retVal = "";
  const len = names.length;
  for (let i = 0; i < len; i++) {
    if (len == 0) {
      retVal = "";
    } else if (len == 1) {
      retVal = names[0].name;
    } else {
      if (i === 0) {
        retVal += names[i].name;
      } else if (i === len - 1) {
        retVal += " & ";
        retVal += names[i].name;
      } else {
        retVal += ", ";
        retVal += names[i].name;
      }
    }
  }

  return retVal;
};

let data1 = [];
let data2 = [{ name: "Bart" }];
let data3 = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

console.log(list(data1));
console.log(list(data2));
console.log(list(data3));
