const containsDuplicate = (arr) => {
  //1st method (sorting) O(N*logN) O(1)
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;

  //2nd method (hashing) O(N) O(N)
  //   const hash = new Array(100).fill(0);
  //   for (let i = 0; i < arr.length; i++) {
  //     hash[arr[i]]++;
  //   }
  //   for (let i = 0; i < 100; i++) {
  //     if (hash[i] > 1) return true;
  //   }
  //   return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
