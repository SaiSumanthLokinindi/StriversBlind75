var getCombo = function (i, target, candidates, currentList, finalList) {
  if (i === candidates.length) {
    if (target === 0) {
      finalList.push([...currentList]);
    }
    return;
  }
  if (candidates[i] <= target) {
    currentList.push(candidates[i]);
    getCombo(i, target - candidates[i], candidates, currentList, finalList);
    currentList.pop();
  }

  getCombo(i + 1, target, candidates, currentList, finalList);
  return;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const finalList = [];

  getCombo(0, target, candidates, [], finalList);
  return finalList;
};
