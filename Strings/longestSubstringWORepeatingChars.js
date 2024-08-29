///Brute force - time:  O(n^2) space: O(256)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    max = 0;
  const n = s.length;
  while (i < n) {
    let count = 0,
      hash = [];
    for (let j = i; j < n; j++) {
      if (!hash.includes(s[j])) {
        hash.push(s[j]);
        count++;
        if (count > max) max = count;
      } else {
        break;
      }
    }
    i++;
  }
  return max;
};

//Optimal time: O(N) space: O(256)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    maxLength = 0;
  const hash = {};
  for (let r = 0; r < s.length; r++) {
    if (!hash.hasOwnProperty(s[r])) {
      hash[s[r]] = r;
    } else {
      const index = hash[s[r]];
      if (index >= l) {
        l = index + 1;
        hash[s[r]] = r;
      } else {
        hash[s[r]] = r;
      }
    }
    const length = r - l + 1;
    if (length > maxLength) maxLength = length;
  }
  return maxLength;
};
