function generateShape(N) {
  let k = "";

  for (let i = 1; i <= N; i++) {
    let r = "";

    for (let j = 1; j <= N; j++) {
      r += "+";
    }

    if (i !== N) {
      r += "\n";
    }

    k += r;
  }

  return k;
}

console.log(generateShape(8));
