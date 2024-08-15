/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;
  let max = Number.NEGATIVE_INFINITY;
  let i = 0,
    j = n - 1;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(area, max);
    if (height[i] <= height[j]) i++;
    else j--;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
