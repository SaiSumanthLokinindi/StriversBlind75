/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let low = 0,
    high = nums.length - 1;
  const mid = Math.floor((low + high) / 2);
  if (nums[low] > nums[mid]) {
    high = mid;
    return findMin(nums.slice(low, high + 1));
  } else if (nums[mid] > nums[high]) {
    low = mid + 1;
    return findMin(nums.slice(low, high + 1));
  } else return nums[low];
};

// console.log(findMin([3, 4, 5, 1, 2]));

var findMinimum = (nums) => {
  let low = 0,
    high = nums.length - 1,
    min = Number.POSITIVE_INFINITY,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[mid]) {
      min = Math.min(min, nums[low]);
      low = mid + 1;
    } else if (nums[mid] <= nums[high]) {
      min = Math.min(min, nums[mid]);
      high = mid - 1;
    }
  }
  return min;
};

console.log(findMinimum([3, 4, 5, 1, 2]));
