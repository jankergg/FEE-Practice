const col = Array(4).fill(0);
const diaX = new Map();
const diaY = new Map();
const solutions = [];
const isValidMove = (x, y) => {
  const v = !col[x] && !diaX.has(x + y) && !diaY.has(x - y);
  return v;
};
const update = (x, y, isPut) => {
  col[x] = isPut;
  diaX.set(x + y, isPut);
  diaY.set(x - y, isPut);
};
const checkRec = (n, y) => {
  if (y === n) {
    solutions.push(1);
    return;
  }
  for (let x = 0; x < n; x++) {
    const v = isValidMove(x, y);
    if (v) {
      console.log("x,y", x, y);
      update(x, y, 1);
      checkRec(n, y + 1);
      update(x, y, 0);
    }
  }
};
var totalNQueens = function (n) {
  checkRec(n, 0);
  return solutions.length;
};

const r = totalNQueens(4);
console.log("result:", r);
