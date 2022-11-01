function printerError(s) {
  s = s.split("");

  const b = s.filter((ba) => {
    return ba.charCodeAt(0) < 97 || ba.charCodeAt(0) > 109;
  });

  return `${b.length}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
