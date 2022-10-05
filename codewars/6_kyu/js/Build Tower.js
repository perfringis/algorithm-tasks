function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
        tower.push(' '.repeat(nFloors - i) + '*'.repeat(2 * i - 1) + ' '.repeat(nFloors - i));
    }
    return tower;
}