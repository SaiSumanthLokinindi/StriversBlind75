/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];
  if (n === 0) return [0];
  res.push(0);
  res.push(1);
  for (let i = 2; i <= n; i++) {
    if (i & 1) res.push(res[i >> 1] + 1);
    else res.push(res[i >> 1]);
  }
  return res;
};
