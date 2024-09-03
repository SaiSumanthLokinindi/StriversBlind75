/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let top = -1;
  for (let x of s) {
    if (x === ")") {
      if (top === -1) return false;
      if (stack[top] === "(") {
        stack.pop();
        top--;
      } else {
        return false;
      }
    } else if (x === "]") {
      if (top === -1) return false;
      if (stack[top] === "[") {
        stack.pop();
        top--;
      } else {
        return false;
      }
    } else if (x === "}") {
      if (top === -1) return false;
      if (stack[top] === "{") {
        stack.pop();
        top--;
      } else {
        return false;
      }
    } else {
      stack.push(x);
      top++;
    }
  }
  return top === -1;
};
