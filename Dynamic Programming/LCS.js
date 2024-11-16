var getLength = function (i1, i2, text1, text2, dp) {
  if (i1 < 0 || i2 < 0) return 0;
  if (dp[i1][i2] !== -1) return dp[i1][i2];
  if (text1[i1] === text2[i2]) {
    dp[i1][i2] = 1 + getLength(i1 - 1, i2 - 1, text1, text2, dp);
  } else {
    dp[i1][i2] = Math.max(
      getLength(i1 - 1, i2, text1, text2, dp),
      getLength(i1, i2 - 1, text1, text2, dp)
    );
  }
  return dp[i1][i2];
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from(new Array(text1.length), (x) =>
    new Array(text2.length).fill(-1)
  );
  return getLength(text1.length - 1, text2.length - 1, text1, text2, dp);
};

//tabulation and printing

var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length,
    m = text2.length;
  const dp = Array.from(new Array(n + 1), (x) => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // printing
  let i = n,
    j = m;

  const res = [];

  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      res.unshift(text1[--i]);
      j--;
    } else {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }

  console.log(res.join(""));

  return dp[n][m];
};
