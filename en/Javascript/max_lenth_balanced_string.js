/**
 *  A string is called balanced when every letter occuring in the string, appears both in upper and lowercase.
 *  For example, the string 'CATattac' is balanced, but 'Madam' is not. Note that the number of occurrences does not matter.
 *  Write a function that, given a string S of length N, returns the length of the shortest balanced fragment of S.
 *  If S does not contain any balanced fragments, the function should return -1.
 */
function getCounter(cur) {
  let isUpper = cur === cur.toUpperCase();
  return isUpper ? cur.toLowerCase() : cur.toUpperCase();
}
function solution(s) {
  let max = -1;
  let dict = {};
  let currentStack = {};

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let counter = getCounter(cur);
    let nextIndex = s.slice(i).indexOf(counter);
    // mark current element as visited
    dict[cur] = true;
    if (nextIndex > -1 || dict[counter]) {
      currentStack[cur] = i;
      let balanced = true;
      let start = s.length;
      let end = 0;
      for (let t in currentStack) {
        if (currentStack[getCounter(t)] === undefined) {
          balanced = false;
          break;
        }
        start = Math.min(start, currentStack[t]);
        end = Math.max(end, currentStack[t]);
      }
      if (balanced && end > start) {
        max = Math.max(max, end - start + 1);
      }
    } else {
      currentStack = {};
    }
  }
  return max;
}

const tests = ["azABaabza", "TacoCat", "AcZCbaBz", "abcdefghijklmnopqrstuvwxyz"];
tests.map((t) => {
  console.log(solution(t));
});
