/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(" ");
  if (pattern.length !== arr.length) {
    return false;
  }
  const p = new Map();
  const w = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (p.has(pattern[i]) || w.has(arr[i])) {
      if (p.get(pattern[i]) !== arr[i] || w.get(arr[i]) !== pattern[i]) {
        return false;
      }
    } else {
      p.set(pattern[i], arr[i]);
      w.set(arr[i], pattern[i]);
    }
  }
  return true;
};
