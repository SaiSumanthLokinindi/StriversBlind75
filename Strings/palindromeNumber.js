/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let sum = 0,
    n = x;
  while (n) {
    let r = n % 10;
    sum = sum * 10 + r;
    n = Math.floor(n / 10);
  }

  return sum == x;
};
