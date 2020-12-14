const palindromeChainLength = n => {
  let count = 0;
  let palindrome = reverse(n);

  while (palindrome !== n) {
    n = n + palindrome;
    palindrome = reverse(n);
    ++count;
  }

  return count;
};

const reverse = num => {
  let rev = 0;

  while (num > 0) {
    let dig = num % 10;
    rev = rev * 10 + dig;
    num = Math.floor(num / 10);
  }

  return rev;
};
