/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length,
    res = [];
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    while (j < n - 2) {
      if (j > 1 && i + 1 !== j && nums[j] === nums[j - 1]) {
        j++;
        continue;
      }
      k = j + 1;
      l = n - 1;
      while (k < l) {
        if (i === 1) {
          console.log(i, j, k, l);
        }
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        }
      }
      j++;
    }
  }
  return res;
};

console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
