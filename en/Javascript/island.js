/**
 * B B B B
 * W B W B
 * B B B B
 * if W can reach the border? then, what's the number?
 */
function isOnBorder(i, j, matrix) {
  return i === 0 || i === matrix.length - 1 || j === 0 || j === matrix[0].length - 1;
}
function validConnection(i, j, matrix, memo) {
  if (isOnBorder(i, j, matrix)) {
    memo[i + "_" + j] = 1;
    return true;
  } else {
    if (memo[i - 1 + "_" + j]) {
      memo[i + "_" + j] = 1;
    }
    if (memo[i + 1 + "_" + j]) {
      memo[i + "_" + j] = 1;
    }
    if (memo[i + 1 + "_" + j]) {
      memo[i + "_" + j] = 1;
    }
  }
}
function solution(matrix) {
  let m = matrix.length;
  let n = matrix[0] ? matrix[0].length : 0;
  let memo = {};
  let res = 0;
  if (m < 1 || n < 1) {
    return 0;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "W") {
        if (isOnBorder(i, j, matrix)) {
          memo[i + "_" + j] = 1;
        } else {
          memo[i + "_" + j] = 0;
        }
      }
    }
  }

  for (let w in memo) {
    if (memo[w] === 0) {
    }
    const [x, y] = w.split("_");
  }

  return res;
}

console.log(
  solution([
    ["B", "B", "B", "B"],
    ["B", "B", "B", "B"],
    ["B", "B", "B", "B"],
    ["B", "B", "B", "B"],
  ])
);
