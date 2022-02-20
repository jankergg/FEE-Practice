/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const m = {};
  const keys = [];

  for (let i = 0; i < words.length; i++) {
    if (!m[words[i]]) {
      m[words[i]] = 1;
      keys.push(words[i]);
    } else {
      m[words[i]]++;
    }
  }

  // todo use binary search to solve it in o(n log(k)) time
  keys.sort((a, b) => {
    if (m[a] > m[b]) return -1;
    if (m[a] < m[b]) return 1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  return keys.slice(0, k);
};
