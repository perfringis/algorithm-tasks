function duplicateCount(text) {
    let count = 0;
    let arr = text.toLowerCase().split('');
    let unique = [...new Set(arr)];
    console.log(unique);
    for (let i = 0; i < unique.length; i++) {
        if (arr.filter(x => x === unique[i]).length > 1) {
        count++;
        }
    }
    return count;
}

console.log(duplicateCount("Indivisibilities"))