/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length;
  const res = Array.from(new Array(n), (x) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let start = 0,
      end = i;
    console.log(start, end);
    while (start < n && end < n) {
      if (start === end) {
        res[start][end] = 1;
      } else if (end - start <= 2 && s[start] === s[end]) {
        console.log("here");
        res[start][end] = 1;
      } else if (s[start] === s[end] && res[start + 1][end - 1]) {
        res[start][end] = 1;
      }
      start++;
      end++;
    }
  }

  let count = 0;

  console.log(res);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (res[i][j]) count++;
    }
  }

  return count;
};
