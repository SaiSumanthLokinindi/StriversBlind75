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
function missingNumber2(nums, N) {
  let XOR1 = 0,
    XOR2 = 0;
  for (let i = 0; i < N - 1; i++) {
    XOR1 ^= nums[i];
    XOR2 ^= i + 1;
  }
  return XOR1 ^ XOR2 ^ N;
}

console.log(missingNumber2([1, 3, 4, 2], 5));
