// @ts-nocheck
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const dict = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res = [];
  for (let i = 0; i < digits.length; i++) {
    const l = dict[digits[i]];
    if (res.length === 0) {
      for (let j = 0; j < l.length; j++) {
        res.push(l[j]);
      }
    } else {
      while (res[0].length < i + 1) {
        let top = res.shift();
        for (let j = 0; j < l.length; j++) {
          res.push(top + l[j]);
        }
      }
    }
  }
  return res;
};
