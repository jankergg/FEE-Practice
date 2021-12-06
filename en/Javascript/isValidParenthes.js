/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var isValid = function (s) {
  if (s.length < 2 || s.length % 2 > 0) { return false }

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let ele = s[i];
    if (pairs[ele]) {
      stack.push(ele);
    } else {
      if (stack.length < 1) { return false };
      if (ele !== pairs[stack[stack.length - 1]]) { return false }
      stack.pop();
    }
  }
  return stack.length === 0;
}
const d = isValid("([)]")
console.log(d);