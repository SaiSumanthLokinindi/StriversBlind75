var lowerBound = function (lb, ub, arr, x) {
  if (lb === ub) return ub;
  if (lb > ub) return -1;
  console.log(lb, ub);
  const mid = Math.floor((lb + ub) / 2);
  if (arr[mid] === x) return mid;
  else if (x < arr[mid]) return lowerBound(lb, mid, arr, x);
  else return lowerBound(mid + 1, ub, arr, x);
};

const a = [1, 7, 8, 4, 5, 6, -1, 9];

const hash = [1, 4, 5, 6];

console.log(lowerBound(0, hash.length - 1, hash, -1));
