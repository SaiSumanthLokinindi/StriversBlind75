// Length of longest increasing subsequence
var getLength = function (i, pInd, nums, dp) {
  if (i === nums.length) {
    return 0;
  }
  if (dp[i][pInd + 1] !== -1) return dp[i][pInd + 1];

  let take = 0;
  if (pInd == -1 || nums[i] > nums[pInd])
    take = 1 + getLength(i + 1, i, nums, dp);
  const notTake = getLength(i + 1, pInd, nums, dp);
  dp[i][pInd + 1] = Math.max(take, notTake);
  return dp[i][pInd + 1];
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array.from(new Array(nums.length), (x) =>
    new Array(nums.length + 1).fill(-1)
  );
  if (nums.length <= 1) return nums.length;
  return getLength(0, -1, nums, dp);
};

// Tabulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n <= 1) return n;

  const dp = Array.from(new Array(n + 1), (x) => new Array(n + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let prevInd = i - 1; prevInd >= -1; prevInd--) {
      const notTake = dp[i + 1][prevInd + 1];
      let take = 0;
      if (prevInd === -1 || nums[i] > nums[prevInd])
        take = 1 + dp[i + 1][i + 1];
      dp[i][prevInd + 1] = Math.max(take, notTake);
    }
  }
  return dp[0][0];
};

// T O(N2) space O(N)
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n <= 1) return n;

  const dp = new Array(n).fill(1);

  // for printing the LIS
  const hash = new Array(n).fill(-1);
  let maxSoFar = 1,
    maxInd = 0;

  if (nums[1] > nums[0]) {
    dp[1] = 1 + dp[0];
    maxSoFar = dp[1];
    hash[1] = 0;
  }
  for (let i = 2; i < n; i++) {
    let max = 1;
    for (let j = 0; j <= i - 1; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > max) {
          max = dp[j] + 1;
          hash[i] = j;
        }
        dp[i] = max;
        if (max > maxSoFar) {
          maxSoFar = max;
          maxInd = i;
        }
      }
    }
  }
  const hashElements = [];
  let i = maxInd;

  while (i >= 0) {
    hashElements.unshift(nums[i]);
    i = hash[i];
  }
  console.log(hashElements);
  return maxSoFar;
};

// T O(NlogN) space O(N)
var upperBound = function (lb, ub, arr, x) {
  if (lb === ub) return ub;
  if (lb > ub) return -1;
  const mid = Math.floor((lb + ub) / 2);
  if (arr[mid] === x) return mid;
  else if (x < arr[mid]) return upperBound(lb, mid, arr, x);
  else return upperBound(mid + 1, ub, arr, x);
};

var lengthOfLIS = function (nums) {
  const n = nums.length;

  if (n <= 1) return n;

  const hash = [];

  hash.push(nums[0]);

  for (let i = 1; i < n; i++) {
    if (nums[i] > hash[hash.length - 1]) {
      hash.push(nums[i]);
    } else {
      const indToReplace = upperBound(0, hash.length - 1, hash, nums[i]);
      hash[indToReplace] = nums[i];
    }
    console.log(hash);
  }

  return hash.length;
};
