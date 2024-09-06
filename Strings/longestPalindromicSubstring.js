/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const x = "#" + s.split("").join("#") + "#";
  const n = x.length;
  const p = new Array(n);
  let l = 0,
    r = -1,
    maxLength = 0,
    centerIndex = 0;
  for (let i = 0; i < n; i++) {
    let k = 0;
    if (i > r) {
      k = 1;
    } else {
      k = Math.min(p[l + r - i], r - i);
    }

    while (i - k >= 0 && i + k < n && x[i - k] === x[i + k]) k++;

    if (i - k < 0 || i + k >= n || x[i - k] !== x[i + k]) k--;
    p[i] = k;
    if (k > maxLength) {
      maxLength = k;
      centerIndex = Math.floor(i / 2);
    }
    if (i + k > r) {
      l = i - k;
      r = i + k;
    }
  }
  return s.substr(centerIndex - Math.floor(maxLength / 2), maxLength);
};
