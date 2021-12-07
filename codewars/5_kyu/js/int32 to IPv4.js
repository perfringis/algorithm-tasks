function int32ToIp(int32) {
  let val = int32;
  let str = "";
  for (let i = 0; i < 32; ++i) {
    str += String(val >>> 31);
    val <<= 1;
  }

  const i1 = parseInt(str.slice(0, 8), 2);
  const i2 = parseInt(str.slice(8, 16), 2);
  const i3 = parseInt(str.slice(16, 24), 2);
  const i4 = parseInt(str.slice(24, 32), 2);

  return `${i1}.${i2}.${i3}.${i4}`;
}

console.log(int32ToIp(2154959208));
console.log(int32ToIp(0));
console.log(int32ToIp(2149583361));
