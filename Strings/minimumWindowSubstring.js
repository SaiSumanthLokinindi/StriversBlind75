/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let minLength = Number.POSITIVE_INFINITY,
    l = 0,
    r = 0,
    count = 0,
    startIndex = -1;
  const m = s.length,
    n = t.length,
    hash = {};

  for (let i = 0; i < n; i++) {
    if (hash.hasOwnProperty(t[i])) hash[t[i]]++;
    else hash[t[i]] = 1;
  }

  while (r < m) {
    if (hash.hasOwnProperty(s[r])) {
      if (hash[s[r]] > 0) {
        count++;
      }
      hash[s[r]]--;
    } else {
      hash[s[r]] = -1;
    }
    while (count === n) {
      if (r - l + 1 < minLength) {
        minLength = r - l + 1;
        startIndex = l;
      }

      hash[s[l]]++;
      if (hash[s[l]] > 0) count--;
      l++;
    }
    r++;
  }

  if (startIndex === -1) return "";
  else return s.substr(startIndex, minLength);
};
