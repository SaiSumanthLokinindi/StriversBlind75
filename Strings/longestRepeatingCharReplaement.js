/**
 * 424
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let max = Number.NEGATIVE_INFINITY,
    l = 0,
    maxLength = 0;
  const hash = {};
  for (let r = 0; r < s.length; r++) {
    if (hash.hasOwnProperty(s[r])) {
      hash[s[r]]++;
    } else {
      hash[s[r]] = 1;
    }
    if (hash[s[r]] > max) max = hash[s[r]];
    while (r - l + 1 - max > k) {
      hash[s[l]]--;
      l++;
    }

    const length = r - l + 1;
    if (length > maxLength) maxLength = length;
  }
  return maxLength;
};
