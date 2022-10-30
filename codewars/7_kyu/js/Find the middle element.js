function gimme(triplet) {
    const sorted = triplet.slice().sort((a, b) => a - b);
    return triplet.indexOf(sorted[1]);
}
