var checkString = function (i, s, words, dp) {
  if (i === s.length) return true;

  if (dp[i] !== -1) return dp[i];

  let temp = "";

  for (let j = i; j < s.length; j++) {
    temp += s[j];
    if (words.has(temp) && checkString(j + 1, s, words, dp)) {
      dp[i] = 1;
      return dp[i];
    }
  }
  dp[i] = 0;
  return dp[i];
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(-1);
  return checkString(0, s, new Set(wordDict), dp);
};

// tabulation

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(0);
  dp[dp.length - 1] = 1;
  const n = s.length,
    words = new Set(wordDict);

  for (let i = n - 1; i >= 0; i--) {
    let temp = "";
    for (let j = i; j < n; j++) {
      temp += s[j];
      if (words.has(temp)) {
        dp[i] = dp[j + 1];
        if (dp[i]) break;
      }
    }
  }

  return dp[0];
};
