function sum() {
    return [...arguments].reduce((pre, curr) => pre + curr, 0);
}

console.log(sum(1,2,3))