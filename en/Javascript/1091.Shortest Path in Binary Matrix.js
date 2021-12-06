// @algorithm @lc id=1171 lang=javascript
// @title shortest-path-in-binary-matrix
// @test([[0,1],[1,0]])=2
// @test([[0,0,0],[1,1,0],[1,1,0]])=4
// @test([[1,0,0],[1,1,0],[1,1,0]])=-1
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const m = grid.length;
  if (grid[0][0] === 1 || grid[m - 1][m - 1] === 1) {
    return -1;
  }
  const visited = Array(m).fill(Array(m).fill(0));
  const isVisited = (x, y) => visited[x][y];
  const isValid = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < m;
  };
  const pos = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];
  const queue = [];
  const res = 0;
  while (queue.length > 0) {
    let current = queue.shift();
    for (let i = 0; i < pos.length; i++) {
      let x = current[0] + pos[i][0];
      let y = current[1] + pos[i][1];
      if (isValid(x, y) && !isVisited(x, y)) {
        visited[x][y] = 1;
        queue.push([x, y]);
        res++;
        if (x == m - 1 && y == m - 1) {
          return res;
        }
      }
    }
  }
  return -1;
};
