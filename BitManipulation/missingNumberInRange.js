/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let sum = 0;
  for (const i of nums) sum += i;
  return (n * (n + 1)) / 2 - sum;
};
