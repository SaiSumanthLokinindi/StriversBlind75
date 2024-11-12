var countWays = function (n, dp) {
  if (n <= 1) return 1;
  if (dp[n] !== -1) return dp[n];
  dp[n] = countWays(n - 1, dp) + countWays(n - 2, dp);
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(-1);

  return countWays(n, dp);
};

// Tabulation
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) return n;

  let prev1 = 1,
    prev2 = 1,
    curr;
  for (let i = 2; i <= n; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
};
