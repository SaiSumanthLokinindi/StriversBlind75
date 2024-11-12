function fib(n, dp) {
  if (n <= 1) return n;
  if (dp[n] !== -1) return dp[n];

  dp[n] = fib(n - 1, dp) + fib(n - 2, dp);

  return dp[n];
}

const f = 8;
const dp = new Array(f + 1).fill(-1);

// console.log(fib(f, dp));

const dp2 = new Array(f + 1);

dp2[0] = 0;
dp2[1] = 1;

for (let i = 2; i <= f; i++) {
  dp2[i] = dp2[i - 1] + dp2[i - 2];
}

console.log(dp2);
