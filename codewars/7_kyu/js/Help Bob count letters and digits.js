const countLettersAndDigits = input => {
  return input.split('').reduce((acc, val) => {
    if(/^[A-Z]$/i.test(val) || /^-{0,1}\d+$/.test(val)) {
        return acc + 1;
    } else {
        return acc;
    }
  }, 0);
};

console.log(countLettersAndDigits('abcd'))