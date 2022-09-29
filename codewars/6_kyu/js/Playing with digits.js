function digPow(n, p) {
    let sum = 0;
    let digits = n.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], p + i);
    }
    return sum % n === 0 ? sum / n : -1;
}
