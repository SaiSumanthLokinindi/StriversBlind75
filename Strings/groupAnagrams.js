/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const n = strs.length,
    hash = {},
    res = [];

  for (let i = 0; i < n; i++) {
    const sortedWord = strs[i].split("").sort().join("");
    if (!hash.hasOwnProperty(sortedWord)) {
      hash[sortedWord] = [strs[i]];
    } else {
      hash[sortedWord].push(strs[i]);
    }
  }

  for (let x in hash) {
    res.push(hash[x]);
  }

  return res;
};
