function alphabetPosition(text) {
    return text
        .toUpperCase()
        .split('')
        .filter((x) => x.charCodeAt() > 64 && x.charCodeAt() < 91)
        .map((x) => x.charCodeAt() - 64)
        .join(' ');
}
