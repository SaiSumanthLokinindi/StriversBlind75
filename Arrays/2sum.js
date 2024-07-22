const twoSum = (arr, k) => {
  arr.sort((a, b) => a - b);
  const n = arr.length - 1;
  for (let i = 0, j = n - 1; i < j; ) {
    if (arr[i] + arr[j] === k) return "Yes";
    else if (arr[i] + arr[j] < k) i++;
    else j--;
  }
  return "No";
};

console.log(twoSum([2, 7, 11, 15], 9));
