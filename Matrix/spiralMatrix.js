/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const res = [];
  let startRow = 0,
    endRow = m - 1,
    startColumn = 0,
    endColumn = n - 1;
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let j = startColumn; j <= endColumn; j++) {
      res.push(matrix[startRow][j]);
    }
    startRow++;
    if (startRow > endRow) break;
    for (let i = startRow; i <= endRow; i++) {
      res.push(matrix[i][endColumn]);
    }
    endColumn--;
    if (startColumn > endColumn) break;
    for (let j = endColumn; j >= startColumn; j--) {
      res.push(matrix[endRow][j]);
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      res.push(matrix[i][startColumn]);
    }
    startColumn++;
  }
  return res;
};
