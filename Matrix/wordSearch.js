function checkVisited(visited, index) {
  for (let i = 0; i < visited.length; i++) {
    if (index[0] === visited[i][0] && index[1] === visited[i][1]) return true;
  }

  return false;
}

function checkWord(board, word, p, i, j, m, n, visited) {
  if (p === word.length) return true;
  let up = false,
    down = false,
    left = false,
    right = false;
  if (
    i - 1 >= 0 &&
    board[i - 1][j] === word[p] &&
    !checkVisited(visited, [i - 1, j])
  ) {
    console.log("up", i - 1, j);
    visited.push([i, j]);
    up = checkWord(board, word, p + 1, i - 1, j, m, n, visited);
  }

  if (
    i + 1 < m &&
    board[i + 1][j] === word[p] &&
    !checkVisited(visited, [i + 1, j])
  ) {
    console.log("down", i + 1, j);
    visited.push([i, j]);
    down = checkWord(board, word, p + 1, i + 1, j, m, n, visited);
  }

  if (
    j - 1 >= 0 &&
    board[i][j - 1] === word[p] &&
    !checkVisited(visited, [i, j - 1])
  ) {
    console.log("left", i, j - 1, p + 1);
    visited.push([i, j]);
    left = checkWord(board, word, p + 1, i, j - 1, m, n, visited);
  }

  if (
    j + 1 < n &&
    board[i][j + 1] === word[p] &&
    !checkVisited(visited, [i, j + 1])
  ) {
    console.log("right", i, j + 1);
    visited.push([i, j]);
    right = checkWord(board, word, p + 1, i, j + 1, m, n, visited);
  }

  if (up || down || left || right) return true;
  else return false;
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
        if (checkWord(board, word, p + 1, i, j, m, n, visited)) {
          return true;
        }
      }
    }
  }

  return false;
};
