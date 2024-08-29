function checkWord(board, word, p, i, j, m, n) {
  if (p === word.length) return true;

  if (
    i < 0 ||
    j < 0 ||
    i === m ||
    j === n ||
    board[i][j] !== word[p] ||
    board[i][j] === "!"
  )
    return false;

  let c = board[i][j];
  board[i][j] = "!";

  const up = checkWord(board, word, p + 1, i - 1, j, m, n);
  const down = checkWord(board, word, p + 1, i + 1, j, m, n);
  const left = checkWord(board, word, p + 1, i, j - 1, m, n);
  const right = checkWord(board, word, p + 1, i, j + 1, m, n);

  board[i][j] = c;
  return up || down || left || right;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length,
    n = board[0].length,
    p = 0,
    visited = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[p]) {
        if (checkWord(board, word, p, i, j, m, n)) {
          return true;
        }
      }
    }
  }

  return false;
};
