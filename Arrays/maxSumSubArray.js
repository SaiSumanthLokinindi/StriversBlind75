/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curr = nums[0],
    max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (curr + nums[i] <= nums[i]) {
      curr = nums[i];
    } else curr += nums[i];
    if (curr > max) max = curr;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
