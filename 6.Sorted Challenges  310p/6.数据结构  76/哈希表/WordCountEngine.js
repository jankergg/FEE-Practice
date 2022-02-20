/**(
 * Implement a document scanning function wordCountEngine, which receives a string document
 * 1. returns a list of all unique words in it and their number of occurrences,
 * 2. sorted by the number of occurrences in a descending order.
 * If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.
 * ) */
// TODO: this is also a O(n) solution, that means, we don't need to sort to get the result
// 1. Keep track every freqency to get the largest frequency
// 2. Init an array of size(max_freq+1) with init value 0 = Freq_Counter; so, Freq_Counter[max_freq] = [words]
// 3.
function wordCountEngine(document) {
  // your code goes here
  let res = [];
  const map = new Map();

  document.split(" ").forEach((w) => {
    if (w) {
      const word = w.replace(/\W/g, "").toLowerCase();
      if (!map.has(word)) {
        map.set(word, 1);
      } else {
        map.set(word, map.get(word) + 1);
      }
    }
  });

  const reserved = [];
  map.forEach((val, key) => {
    if (val === 1) {
      reserved.push([key, val.toString()]);
    } else {
      res.push([key, val.toString()]);
    }
  });

  res.sort((a, b) => {
    return b[1] - a[1];
  });

  return res.concat(reserved);
}
