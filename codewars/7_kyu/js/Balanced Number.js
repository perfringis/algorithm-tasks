const balancedNum = number => {
  const str = number.toString();

  if (str.length == 1 || str.length == 2) {
    return 'Balanced';
  } else if (str.length > 2) {
    if (str.length % 2 === 0) {
      const rightCenter = str.length / 2;
      const leftCenter = rightCenter - 1;

      let leftValue = 0;
      for (let i = 0; i < leftCenter; i++) {
        leftValue += parseInt(str[i]);
      }

      let rightValue = 0;
      for (let i = rightCenter + 1; i < str.length; i++) {
        rightValue += parseInt(str[i]);
      }

      if (leftValue === rightValue) {
        return 'Balanced';
      }
      return 'Not Balanced';


    } else {
      const centerIndex = Math.floor(str.length / 2);

      let leftValue = 0;
      for (let i = 0; i < centerIndex; i++) {
        leftValue += parseInt(str[i]);
      }

      let rightValue = 0;
      for (let i = centerIndex + 1; i < str.length; i++) {
        rightValue += parseInt(str[i]);
      }

      if (leftValue === rightValue) {
        return 'Balanced';
      }
      return 'Not Balanced';
    }
  }
};

// console.log(balancedNum(7));
// console.log(balancedNum(959));
// console.log(balancedNum(13));
// console.log(balancedNum(432));
// console.log(balancedNum(424));

console.log(balancedNum(1024));
console.log(balancedNum(66545));
console.log(balancedNum(295591));
console.log(balancedNum(1230987));
console.log(balancedNum(56239814));
