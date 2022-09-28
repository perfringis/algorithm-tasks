function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }

  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  walk.forEach((step) => {
    switch (step) {
      case "n":
        n++;
        break;
      case "s":
        s++;
        break;
      case "e":
        e++;
        break;
      case "w":
        w++;
        break;
    }
  });

  return n === s && e === w;
}
