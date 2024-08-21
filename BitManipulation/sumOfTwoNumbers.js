/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let x;
  while (b !== 0) {
    x = a & b;
    a = a ^ b;
    b = x << 1;
  }
  return a;
};

console.log(getSum(0, 2));
