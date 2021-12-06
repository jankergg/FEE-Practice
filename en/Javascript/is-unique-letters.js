/**
 *  determine is a string only contains unique chars
 *  without using data structure
 */
function solution(s) {
  let bitSet = 0;
  for (let i = 0; i < s.length; i++) {
    let b = 1 << s.charCodeAt(i);
    if ((bitSet & b) !== 0) {
      return false;
    }
    bitSet |= b;
  }
  return true;
}

console.log(solution("abcdefghijklmnopqrstuvwxyz"));
console.log(solution("leetcode"));
