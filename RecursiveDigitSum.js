function superDigit(n, k) {
  let sum = 0;
  if (n.length == 1) {
    return n;
  }
  for (let i = 0; i < n.length; i++) {
    sum = sum + Number(n[i]);
  }
  let val = sum * k;
  k = 1;
  return superDigit(String(val), k);
}
