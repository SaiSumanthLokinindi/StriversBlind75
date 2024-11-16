var BS = function (lb, ub, arr, x) {
  if (lb > ub) return -1;
  console.log(lb, ub);
  const mid = Math.floor((lb + ub) / 2);
  if (arr[mid] === x) return mid;
  else if (x < arr[mid]) return BS(lb, mid - 1, arr, x);
  else return BS(mid + 1, ub, arr, x);
};

console.log(BS(0, 5, [1, 30, 40, 60, 70, 80], 1));
