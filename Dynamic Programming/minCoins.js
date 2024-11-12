var calculateCoins = function (ind, T, coins, dp) {
  if (ind === 0) {
    return T % coins[ind] === 0 ? T / coins[ind] : Number.MAX_SAFE_INTEGER;
  }
  if (dp[ind][T] !== -1) return dp[ind][T];
  const notTake = calculateCoins(ind - 1, T, coins, dp);
  let take = Number.MAX_SAFE_INTEGER;
  if (coins[ind] <= T) {
    take = 1 + calculateCoins(ind, T - coins[ind], coins, dp);
  }
  dp[ind][T] = Math.min(take, notTake);
  return dp[ind][T];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);

  const dp = Array.from(coins, (x) => new Array(amount + 1).fill(-1));

  if (amount == 0) return 0;

  if (coins.length === 1) {
    return amount % coins[0] ? -1 : amount / coins[0];
  }
  const value = calculateCoins(coins.length - 1, amount, coins, dp);
  return value === Number.MAX_SAFE_INTEGER ? -1 : value;
};

//Tabulation
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);

  const dp = Array.from(coins, (x) => new Array(amount + 1).fill(0));

  if (amount == 0) return 0;

  if (coins.length === 1) {
    return amount % coins[0] ? -1 : amount / coins[0];
  }

  for (let i = 0; i < coins.length; i++) {
    dp[i][0] = 0;
  }

  for (let j = 1; j <= amount; j++) {
    if (j % coins[0] === 0) {
      dp[0][j] = j / coins[0];
    } else dp[0][j] = Number.MAX_SAFE_INTEGER;
  }

  for (let i = 1; i < coins.length; i++) {
    for (T = 1; T <= amount; T++) {
      const notTake = dp[i - 1][T];
      let take = Number.MAX_SAFE_INTEGER;
      if (coins[i] <= T) {
        take = 1 + dp[i][T - coins[i]];
      }
      dp[i][T] = Math.min(take, notTake);
    }
  }

  const value = dp[coins.length - 1][amount];
  return value === Number.MAX_SAFE_INTEGER ? -1 : value;
};
