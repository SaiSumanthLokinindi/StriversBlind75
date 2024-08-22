const maxConsecutive1s = (arr) => {
  const x = 1;
  let count = 0,
    max = 0;
  for (let i of arr) {
    if (x & i) {
      count++;
      if (count > max) max = count;
    } else {
      count = 0;
    }
  }

  return max;
};

console.log(maxConsecutive1s([0, 0]));
